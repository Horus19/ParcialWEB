
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
                "                            <input id=\"item1\" value=\"Ingrese nombre alimento\">\n" +
                "                        </td>\n" +
                "                        <td>\n" +
                "                            <input id=\"item1\" value=\"Ingrese cantidad de calorias\">\n" +
                "                        </td>\n" +
                "                        <td>\n" +
                "                            <input id=\"item1\" value=\"Ingrese grasas\">\n" +
                "                        </td>\n" +
                "                        <td>\n" +
                "                            <input id=\"item1\" value=\"Ingrese proteina\">\n" +
                "                        </td>\n" +
                "                        <td>\n" +
                "                            <input id=\"item1\" value=\"Ingrese Carbohidratos\">\n" +
                "                        </td>\n" +
                "                        <td>\n" +
                "                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-emoji-smile-fill\" viewBox=\"0 0 16 16\">\n" +
                "                                <path fill-rule=\"evenodd\" d=\"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c.552 0 1-.672 1-1.5S10.552 5 10 5s-1 .672-1 1.5S9.448 8 10 8z\"/>\n" +
                "                            </svg></td>\n" +
                "                         <td>\n" +
                "                            <button onclick=\"\">En edicion</button>\n" +
                "                         </td>   \n" +
                "                    </tr> ";

        }
        else
        {
            alert("Solo se puede editar una línea. Recargue la página para poder editarotra")
        }
        
    }




   