import { act, renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { useGifs } from "./useGifs";
import * as gifActions from "../actions/get-gifs-by-query.action";

describe('useGifs', () => {
    test('should return default values and methods', () => {
        const { result } = renderHook(() => useGifs());

        expect(result.current.gifs.length).toBe(0);
        expect(result.current.previousTerms.length).toBe(0);
        expect(result.current.handleSearch).toBeDefined();
        expect(result.current.hanldeTermClicked).toBeDefined();
    })

    test('should return a list of gifs', async () => {
        const { result } = renderHook(() => useGifs());

        await act(async () => {
            await result.current.handleSearch('goku');
        })

        expect(result.current.gifs.length).toBe(10);
    })

    test('should return a list of gifs when hanldeTermClicked is called', async () => {
        const { result } = renderHook(() => useGifs());

        await act(async () => {
            await result.current.hanldeTermClicked('goku');
        })

        expect(result.current.gifs.length).toBe(10);
    })

    test('should return a list of gifs pf cache', async () => {
        const { result } = renderHook(() => useGifs());

        await act(async () => {
            await result.current.hanldeTermClicked('goku');
        })

        expect(result.current.gifs.length).toBe(10);

        vi.spyOn(gifActions, 'getGifsByQuery').mockRejectedValue(new Error('This is my custom error'))

        await act(async () => {
            await result.current.hanldeTermClicked('goku');
        })

        expect(result.current.gifs.length).toBe(10);
    })

    test('should return no more of 8 terms', async () => {
        const { result } = renderHook(() => useGifs());

        vi.spyOn(gifActions, 'getGifsByQuery').mockResolvedValue([]);

        await act(async () => {
            await result.current.handleSearch('goku1');
        })
        await act(async () => {
            await result.current.handleSearch('goku2');
        })
        await act(async () => {
            await result.current.handleSearch('goku3');
        })
        await act(async () => {
            await result.current.handleSearch('goku4');
        })
        await act(async () => {
            await result.current.handleSearch('goku5');
        })
        await act(async () => {
            await result.current.handleSearch('goku6');
        })
        await act(async () => {
            await result.current.handleSearch('goku7');
        })
        await act(async () => {
            await result.current.handleSearch('goku8');
        })
        await act(async () => {
            await result.current.handleSearch('goku0');
        })

        expect(result.current.previousTerms.length).toBe(7);
        expect(result.current.previousTerms).toStrictEqual(
            [
                'goku0', 'goku8',
                'goku7', 'goku6',
                'goku5', 'goku4',
                'goku3'
            ]
        )

        console.log(result.current.previousTerms);


    })
})