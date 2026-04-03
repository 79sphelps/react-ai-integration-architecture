export function useRAGLogger() {
  function log(stage: string, payload?: any) {
    console.log(`[RAG PIPELINE] ${stage}`, payload);
  }

  return { log };
}
