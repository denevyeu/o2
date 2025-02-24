import "./App.scss";
import { ContactForm } from "./components/ContactForm";

function App() {
  const handleSave = (data: { phone: string; email: string }) => {
    alert(`Uložené dáta:\nTelefón: ${data.phone}\nEmail: ${data.email}`);
  };

  const handleCancel = () => {
    alert("Späť stlačené");
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Kontaktné údaje</h1>
      <p className="app-subtitle">
        Prepíšte neaktuálne položky týmito správnymi.
      </p>

      <ContactForm
        phone="0911 123 456"
        email="bvandas@denevy.eu"
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </div>
  );
}

export default App;
