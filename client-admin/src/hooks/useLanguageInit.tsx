function useLanguageInit(lan: string | null) {
  if (!lan) {
    localStorage.setItem("language", "en");
  }
}

export default useLanguageInit;
