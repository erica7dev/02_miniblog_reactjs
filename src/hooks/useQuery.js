import { useLocation } from "react-router-dom";

//retorna um valor memorizado e retorna uma função memoizada
import { useMemo } from "react";

export function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}