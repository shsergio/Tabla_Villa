import React, { useState } from 'react';
import './TablaMedicamentos.css';

const TablaMedicamentos = () => {
  const [medicamentos, setMedicamentos] = useState([
    { categoria: 'Morning', medicamento: '', dosis: '', tiempo: '', fecha: '', comentarios: '' },
    { categoria: 'Noon', medicamento: '', dosis: '', tiempo: '', fecha: '', comentarios: '' },
    { categoria: 'Evening', medicamento: '', dosis: '', tiempo: '', fecha: '', comentarios: '' },
    { categoria: 'Night', medicamento: '', dosis: '', tiempo: '', fecha: '', comentarios: '' },
    { categoria: 'Only When I Need It', medicamento: '', dosis: '', tiempo: '', fecha: '', comentarios: '' }
  ]);

  const handleInputChange = (e, index, field) => {
    const { value } = e.target;
    const updatedMedicamentos = [...medicamentos];
    updatedMedicamentos[index][field] = value;
    setMedicamentos(updatedMedicamentos);
  };

  return (
    <div className="medicine-table">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Medicamento</th>
            <th>Dosis</th>
            <th>Tiempo</th>
            <th>Fecha</th>
            <th>Comentarios</th>
          </tr>
        </thead>
        <tbody>
          {medicamentos.map((med, index) => (
            <tr key={index}>
              <td>{med.categoria}</td>
              <td><input value={med.medicamento} onChange={(e) => handleInputChange(e, index, 'medicamento')} /></td>
              <td><input value={med.dosis} onChange={(e) => handleInputChange(e, index, 'dosis')} /></td>
              <td><input value={med.tiempo} onChange={(e) => handleInputChange(e, index, 'tiempo')} /></td>
              <td><input value={med.fecha} onChange={(e) => handleInputChange(e, index, 'fecha')} /></td>
              <td><input value={med.comentarios} onChange={(e) => handleInputChange(e, index, 'comentarios')} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaMedicamentos;
