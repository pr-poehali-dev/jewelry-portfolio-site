import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { X, Search } from "lucide-react";
import { Input } from "./ui/input";

type SearchModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type SearchResult = {
  id: string;
  name: string;
  category: string;
  image: string;
};

// Имитация данных поиска
const searchResults: SearchResult[] = [
  { id: "1", name: "Кольцо Infinity", category: "Кольца", image: "/placeholder.svg" },
  { id: "2", name: "Серьги Minimal", category: "Серьги", image: "/placeholder.svg" },
  { id: "3", name: "Браслет Connection", category: "Браслеты", image: "/placeholder.svg" },
  { id: "4", name: "Колье Horizon", category: "Колье", image: "/placeholder.svg" },
];

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Фокус на поле ввода при открытии
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }

    // Блокировка скролла при открытом модальном окне
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    // Фильтрация результатов поиска
    if (query.trim() === "") {
      setFilteredResults([]);
      return;
    }

    const results = searchResults.filter(
      (result) =>
        result.name.toLowerCase().includes(query.toLowerCase()) ||
        result.category.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredResults(results);
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(query)}`);
      onClose();
    }
  };

  const handleProductClick = (id: string) => {
    navigate(`/catalog/${id}`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/50 flex justify-center items-start overflow-y-auto pt-20 px-4"
      onClick={onClose}
    >
      <div 
        className="bg-background rounded-lg shadow-xl w-full max-w-2xl animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Поиск</h3>
            <button 
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <form onSubmit={handleSearch} className="relative mb-6">
            <Input
              ref={inputRef}
              type="text"
              placeholder="Введите запрос..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pr-10"
            />
            <button 
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
          </form>
          
          {query.trim() && (
            <div className="space-y-1 mb-2">
              <p className="text-sm text-muted-foreground">
                {filteredResults.length 
                  ? `Найдено результатов: ${filteredResults.length}` 
                  : "Ничего не найдено"}
              </p>
            </div>
          )}
          
          {filteredResults.length > 0 && (
            <div className="divide-y">
              {filteredResults.map((result) => (
                <div 
                  key={result.id}
                  onClick={() => handleProductClick(result.id)}
                  className="flex items-center gap-4 py-3 cursor-pointer hover:bg-secondary transition-colors"
                >
                  <div className="h-16 w-16 bg-muted rounded overflow-hidden flex-shrink-0">
                    <img 
                      src={result.image} 
                      alt={result.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{result.name}</h4>
                    <p className="text-sm text-muted-foreground">{result.category}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {query.trim() && filteredResults.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground mb-2">По вашему запросу ничего не найдено</p>
              <p className="text-sm">Попробуйте изменить поисковый запрос или перейдите в каталог</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;