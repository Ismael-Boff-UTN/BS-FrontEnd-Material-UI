import React from "react";
import MaterialTable from "material-table";

const PedidosTable = ({ pedidos }) => {
  const cols = [
    {
      title: "Fecha Compra",
      field: "fecha",
      sort: "desc",
    },
    {
      title: "Estado",
      field: "estado",
    },
    {
      title: "Tipo Envio",
      field: "estado",
    },
    {
      title: "Total",
      field: "total",
    },
  ];
  return (
    <>
      <MaterialTable
        columns={cols}
        data={pedidos}
        title="Historial De Pedidos"
        actions={[
          {
            icon: "add",
            tooltip: "Descargar Factura",
            onClick: (e, rowData) => alert(rowData.nombreCliente),
          },
        ]}
        options={{ actionsColumnIndex: -1 }}
        localization={{ header: { actions: "Acciones" } }}
      />
    </>
  );
};

export default PedidosTable;
