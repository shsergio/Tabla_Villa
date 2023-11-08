import React, { useState, useEffect } from 'react';
import './TablaMedicamentos.css';

const TablaMedicamentos = () => {
  const [medicamentos, setMedicamentos] = useState([]);

  useEffect(() => {
    const mockMedicamentos = [
      { id: 1, nombre: 'Medicamento 1', categoria: 'Morning', dosis: '10mg', tiempo: '08:00', receta: 'Receta 1', color: '#ffcccc' },
      { id: 2, nombre: 'Medicamento 2', categoria: 'Noon', dosis: '20mg', tiempo: '12:00', receta: 'Receta 2', color: '#ccffcc' },
      { id: 3, nombre: 'Medicamento 3', categoria: 'Evening', dosis: '15mg', tiempo: '18:00', receta: 'Receta 3', color: '#ccccff' },
      { id: 4, nombre: 'Medicamento 4', categoria: 'Night', dosis: '25mg', tiempo: '22:00', receta: 'Receta 4', color: '#ffffcc' },
      { id: 5, nombre: 'Medicamento 5', categoria: 'Only When I Need It', dosis: 'Varies', tiempo: 'Varies', receta: 'Receta 5', color: '#ffccff' }
    ];
    setMedicamentos(mockMedicamentos);
  }, []);

  const handleInputChange = (e, id, field) => {
    const { value } = e.target;
    const updatedMedicamentos = medicamentos.map((med) => {
      if (med.id === id) {
        return { ...med, [field]: value };
      }
      return med;
    });
    setMedicamentos(updatedMedicamentos);
  };

  const agregarMedicamento = () => {
    const nuevoId = medicamentos.length > 0 ? medicamentos[medicamentos.length - 1].id + 1 : 1;
    const nuevoMedicamento = {
      id: nuevoId,
      nombre: '',
      categoria: 'Morning', // Categoría por defecto al agregar un nuevo medicamento
      dosis: '',
      tiempo: '',
      receta: '',
      color: '#ffffff' // Color por defecto o podrías generar uno aleatorio
    };
    setMedicamentos([...medicamentos, nuevoMedicamento]);
  };

  const eliminarMedicamento = (id) => {
    const updatedMedicamentos = medicamentos.filter((med) => med.id !== id);
    setMedicamentos(updatedMedicamentos);
  };

  return (
    <div className="medicine-table">
      <button onClick={agregarMedicamento}>Agregar Medicamento</button>
      <table>
        <thead>
          <tr>
            <th>Categoría</th>
            <th>Medicamento</th>
            <th>Dosis</th>
            <th>Tiempo</th>
            <th>Receta</th>
          </tr>
        </thead>
        <tbody>
          {medicamentos.map((med) => (
            <tr key={med.id} style={{ backgroundColor: med.color }}>
              <td>{med.categoria}</td>
              <td><input value={med.nombre} onChange={(e) => handleInputChange(e, med.id, 'nombre')} /></td>
              <td><input value={med.dosis} onChange={(e) => handleInputChange(e, med.id, 'dosis')} /></td>
              <td><input value={med.tiempo} onChange={(e) => handleInputChange(e, med.id, 'tiempo')} /></td>
              <td><input value={med.receta} onChange={(e) => handleInputChange(e, med.id, 'receta')} /></td>
              <td>
                <button onClick={() => eliminarMedicamento(med.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaMedicamentos;
