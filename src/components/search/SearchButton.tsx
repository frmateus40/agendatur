import { IconSearch } from "./icons";

interface SearchButtonProps {
  loading?: boolean;
  children?: React.ReactNode;
}

export default function SearchButton({ loading = false, children = "Buscar" }: SearchButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-accent px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-600 disabled:opacity-60 md:w-auto"
    >
      {loading ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
      ) : (
        <IconSearch className="h-4 w-4" />
      )}
      {loading ? "Buscando…" : children}
    </button>
  );
}
