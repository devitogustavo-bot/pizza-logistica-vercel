'use client';

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Page() {
  const [formData, setFormData] = useState({
    availableBikes: "",
    drivers: "",
    shiftsPerDay: "",
    maxOrdersPerDriver: "",
    avgDeliveryTimeMin: "",
    maxSimultaneousDeliveries: "",
    deliveryRadiusKm: "",
    kitchenCapacityPerHour: "",
    orderBufferTimeMin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Operational Parameters:", formData);
    alert("Parámetros guardados correctamente.");
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold text-center">Panel de Configuración Logística</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: "Cantidad de motos disponibles", name: "availableBikes" },
          { label: "Cantidad de choferes", name: "drivers" },
          { label: "Turnos por día", name: "shiftsPerDay" },
          { label: "Máx. pedidos por chofer", name: "maxOrdersPerDriver" },
          { label: "Tiempo promedio de entrega (min)", name: "avgDeliveryTimeMin" },
          { label: "Máx. entregas simultáneas por chofer", name: "maxSimultaneousDeliveries" },
          { label: "Radio de entrega (km)", name: "deliveryRadiusKm" },
          { label: "Capacidad de cocina por hora", name: "kitchenCapacityPerHour" },
          { label: "Tiempo de buffer por pedido (min)", name: "orderBufferTimeMin" },
        ].map(({ label, name }) => (
          <div key={name}>
            <Label htmlFor={name}>{label}</Label>
            <Input
              id={name}
              name={name}
              type="number"
              value={formData[name]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <Button type="submit" className="w-full mt-2">
          Guardar Parámetros
        </Button>
      </form>
    </div>
  );
}