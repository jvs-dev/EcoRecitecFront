import React from "react";
import MailForm from "../components/MailForm";

const HomePage = () => {
  const handleFormSuccess = () => {
    console.log("Formulário enviado com sucesso!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-inter">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-green-700 leading-tight mb-4">
          Economia Circular: Um Futuro Sustentável
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transformando a maneira como produzimos e consumimos para um planeta
          mais saudável.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 flex flex-col items-center text-center">
          <img
            src="https://placehold.co/150x150/007bff/ffffff?text=Reutilizar"
            alt="Ícone Reutilizar"
            className="mb-6 w-36 h-36 rounded-full object-cover shadow-md"
          />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">O Que É?</h2>
          <p className="text-gray-700 leading-relaxed">
            A Economia Circular é um modelo de produção e consumo que envolve o
            compartilhamento, leasing, reutilização, reparação, renovação e
            reciclagem de materiais e produtos existentes o máximo possível.
            Dessa forma, o ciclo de vida dos produtos é estendido.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 flex flex-col items-center text-center">
          <img
            src="https://placehold.co/150x150/28a745/ffffff?text=Reciclar"
            alt="Ícone Reciclar"
            className="mb-6 w-36 h-36 rounded-full object-cover shadow-md"
          />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Por Que É Importante?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ela visa reduzir o desperdício, minimizar a poluição, manter
            produtos e materiais em uso e regenerar sistemas naturais. É uma
            alternativa crucial ao modelo linear de "extrair, produzir, usar e
            descartar".
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 flex flex-col items-center text-center col-span-1 md:col-span-2">
          <img
            src="https://placehold.co/150x150/ffc107/ffffff?text=Reduzir"
            alt="Ícone Reduzir"
            className="mb-6 w-36 h-36 rounded-full object-cover shadow-md"
          />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Princípios Chave
          </h2>
          <ul className="text-gray-700 leading-relaxed list-disc list-inside text-left max-w-xl mx-auto">
            <li>
              <strong>Reduzir:</strong> Minimizar o consumo de recursos e a
              geração de resíduos.
            </li>
            <li>
              <strong>Reutilizar:</strong> Estender a vida útil de produtos e
              componentes.
            </li>
            <li>
              <strong>Reciclar:</strong> Processar materiais descartados para
              criar novos produtos.
            </li>
            <li>
              <strong>Reparar:</strong> Consertar produtos para que possam ser
              usados novamente.
            </li>
            <li>
              <strong>Regenerar:</strong> Devolver recursos biológicos à
              natureza.
            </li>
          </ul>
        </div>
      </section>

      <section className="w-full max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-8">
          Gráfico: Fluxo da Economia Circular
        </h2>
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 flex justify-center items-center">
          <img
            src="https://placehold.co/600x300/e0e0e0/333333?text=Gráfico+Economia+Circular"
            alt="Gráfico Ilustrativo da Economia Circular"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      <section className="w-full max-w-3xl mx-auto">
        <MailForm action={handleFormSuccess} />
      </section>
    </div>
  );
};

export default HomePage;
