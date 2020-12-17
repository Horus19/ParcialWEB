
function editarRow(etiqueta)

    {

        if (editando == false)
        {

            $(document).ready(function(){

        
                $('#DatosEditados').show();
               // $('#'+etiqueta).hide();
                
            });
            editando = true;
            var Row = document.getElementById(etiqueta);
            Row.innerHTML="<tr id=\"coll1_2\">\n" +
                "                        <td>\n" +
                "                            <input name = 'alimento' id=\"item1\" value=\"Ingrese nombre alimento\">\n" +
                "                        </td>\n" +
                "                        <td>\n" +
                "                            <input name = 'calorias' type='number' id=\"item2\" value=\"Ingrese cantidad de calorias\">\n" +
                "                        </td>\n" +
                "                        <td>\n" +
                "                            <input name = 'grasas'  type='number' id=\"item3\" value=\"Ingrese grasas\">\n" +
                "                        </td>\n" +
                "                        <td>\n" +
                "                            <input name = 'proteina' type='number' id=\"item4\" value=\"Ingrese proteina\">\n" +
                "                        </td>\n" +
                "                        <td>\n" +
                "                            <input  name = 'Carbohidratos' type='number' id=\"item5\" value=\"Ingrese Carbohidratos\">\n" +
                "                        </td>\n" +
                "                        <td>\n" +
                "                            <select name=\"ok\" id=\"ok\">\n" +
                "\t\t\t\t <option value=\"Bien\">Bien</option>\n" +
                "  \t\t\t\t<option value=\"Mal\">Mal</option>\n" +
                "\t\t\t\t</select>\n" +
                "                         <td>\n" +
                "                            <button class='btn btn-secondary\' onclick=\"\">En edicion</button>\n" +
                "                         </td>   \n" +
                "                    </tr> \n";

        }
        else
        {
            alert("Solo se puede editar una línea. Recargue la página para poder editarotra")
        }
        
    }



    function validar()
    {
        var alimento = document.getElementById("item1").value;
        var Calorias = document.getElementById("item2").value;
        var Grasa = document.getElementById("item3").value;
        var Proteina = document.getElementById("item4").value;
        var carbohidrado = document.getElementById("item5").value;


        if (alimento == "Ingrese nombre alimento" || alimento == "")
        {
            alert("debe ingresar un dato en alimento");
            return false;
        }
        if (Calorias =="")
        {
            alert("debe ingresar el numero de calorias del alimento");
            return false;
        }
        if (Grasa =="")
        {
            alert("debe ingresar el numero de Grasa del alimento");
            return false;
        }
        if (Proteina =="")
        {
            alert("debe ingresar el numero de Proteina del alimento");
            return false;
        }
        if (carbohidrado =="")
        {
            alert("debe ingresar el numero de carbohidrado del alimento");
            return false;
        }

        return true;
    }




   