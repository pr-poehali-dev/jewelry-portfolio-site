import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
};

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Золотое кольцо с бриллиантом",
    category: "Кольца",
    image: "/placeholder.svg",
    price: "45 000 ₽",
  },
  {
    id: 2,
    name: "Серебряный браслет с гравировкой",
    category: "Браслеты",
    image: "/placeholder.svg",
    price: "12 500 ₽",
  },
  {
    id: 3,
    name: "Колье из розового золота",
    category: "Колье",
    image: "/placeholder.svg",
    price: "35 700 ₽",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Популярные изделия</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Каждое украшение уникально и создается с особым вниманием к деталям.
            Мы вкладываем душу в каждое изделие.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Link key={product.id} to={`/portfolio`}>
              <Card className="jewel-card h-full">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-jewelry-gold uppercase tracking-wider">
                      {product.category}
                    </span>
                    <h3 className="font-semibold text-lg mt-2">{product.name}</h3>
                    <p className="mt-4 font-semibold text-jewelry-gold">{product.price}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;