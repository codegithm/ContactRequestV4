"use client";
import { useEffect, useState } from "react";
import { fetchVdnDirectoryEntries, getLocalVdnDirectoryEntries, shouldUseMockVdnDirectory, } from "@/lib/vdn-directory";
import type { VdnDirectoryEntry } from "@/models/vdn-directory";
export function useVdnDirectory() {
    const useMockDirectory = shouldUseMockVdnDirectory();
    const [entries, setEntries] = useState<VdnDirectoryEntry[]>(() => useMockDirectory ? getLocalVdnDirectoryEntries() : []);
    const [isLoading, setIsLoading] = useState(!useMockDirectory);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        if (useMockDirectory) {
            setEntries(getLocalVdnDirectoryEntries());
            setError(null);
            setIsLoading(false);
            return;
        }
        let cancelled = false;
        fetchVdnDirectoryEntries()
            .then((payload) => {
            if (cancelled) {
                return;
            }
            setEntries(payload);
            setError(null);
        })
            .catch(() => {
            if (cancelled) {
                return;
            }
            setError("Could not load VDN options.");
        })
            .finally(() => {
            if (!cancelled) {
                setIsLoading(false);
            }
        });
        return () => {
            cancelled = true;
        };
    }, [useMockDirectory]);
    return { entries, isLoading, error };
}
