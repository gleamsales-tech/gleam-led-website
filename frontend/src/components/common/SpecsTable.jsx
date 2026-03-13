import React from 'react';

const SpecsTable = ({ specs }) => {
  if (!specs || !specs.data || !specs.models) return null;

  return (
    <div className="overflow-x-auto" data-testid="specs-table">
      <table className="spec-table min-w-full">
        <thead>
          <tr>
            <th className="text-left">Specification</th>
            {specs.models.map((model) => (
              <th key={model} className="text-left">{model}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {specs.data.map((row, idx) => (
            <tr key={idx} className="hover:bg-slate-50 transition-colors">
              <td className="font-medium text-slate-900">{row.feature}</td>
              {specs.models.map((model) => (
                <td key={model} className="text-slate-600">
                  {row[model] || row[model.replace('-', '')] || '-'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpecsTable;
