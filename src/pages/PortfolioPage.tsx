import PortfolioGrid from "@/components/PortfolioGrid";

const PortfolioPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Наши работы</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Каждое украшение в нашем портфолио — это уникальное произведение ювелирного искусства,
          созданное с любовью и вниманием к деталям.
        </p>
      </div>
      
      <PortfolioGrid />
    </div>
  );
};

export default PortfolioPage;