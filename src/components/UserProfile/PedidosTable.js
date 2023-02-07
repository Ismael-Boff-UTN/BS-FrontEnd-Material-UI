import MaterialTable from "material-table";
import React from "react";
import jsPDF from 'jspdf';

const PedidosTable = ({pedidos}) => {

  const downloadPdf = (id) => {
    console.log(id);
    pedidos.forEach((ped) => {
      //console.log(ped._id);
      if (ped._id == id) {
        const doc = new jsPDF()
        doc.text("Factura de pedido: "+ ped._id, 20, 10)
        doc.text("_________________________________", 20, 20)
        doc.text("Realizado por: "+ ped.nombreCliente, 20, 30)
        doc.text("Fecha y hora: "+ ped.fecha, 20, 40)
        doc.text("Tipo de envio: "+ ped.tipoEnvio, 20, 50)
        doc.text("Estado: "+ ped.estado, 20, 60)
        doc.text("Detalle: ", 20, 70)
        doc.text("--------------------------", 20, 80)
        var y= new Int16Array
        y= 90
        ped.detallesPedido.map((p) => (
          doc.text("producto: "+ p.articulo.denominacion + " Cantidad: " + p.cantidad + " Precio c/u: " + p.precioUnitario, 20, y),y=y+10
        ))
        
        doc.text("--------------------------", 20, y)
        doc.text("Total: " + ped.total, 20, y+10)
        //doc.text(ped.total, 20, 10)
        doc.save('Factura.pdf')
      }
    });
  }

  const cols = [
    {
      title: "Fecha Compra",
      field: "fecha",
      sort: "desc",
    },
    {
      title: "Detalle/Cantidad",
      field: "detalle",
      render: (rowData) =>
      rowData.detallesPedido.map((p) => (
        <>
          <p>{p.articulo.denominacion}//Cantidad: {p.cantidad}</p>
        </>
      ))
    },
    {
      title: "Estado",
      field: "estado",
    },
    {
      title: "Tipo Envio",
      field: "tipoEnvio",
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
            tooltip: "Export to Pdf",
            onClick: (e, rowData) => downloadPdf(rowData._id),
          },
        ]}
        options={{ actionsColumnIndex: -1 }}
        localization={{ header: { actions: "Acciones" } }}
      />
    </>
  );
};

export default PedidosTable;
