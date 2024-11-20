import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "../main.tsx";
import {BASE_URL} from "../models/constants.ts";

const key: string = "user";
const url: string = BASE_URL + key

async function mut(oldData: unknown): Promise<unknown> {
  return oldData
      ? {
        ...oldData,
      }
      : oldData;
}

export namespace userApi {
  export const get = useQuery({
    queryKey: [key],
    queryFn: async (): Promise<any> => {
      try {
        const response: any = await fetch(url);
        return response.json();
      } catch (err: any) {
        throw new Error(err.message);
        return null;
      }
    },
  });

  export const create = useMutation({
    mutationFn: mut,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [key] });
    },
  });
  export const update = useMutation({
    mutationFn: mut,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [key] });
    },
  });
  export const remove = useMutation({
    mutationFn: mut,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [key] });
    },
  });
}
