$(document).ready(
    function(){
        console.log("bocata lomo ya");
        $.getJSON("Datos.json", function(juegos) {
            let submit = $("<input>").attr("type", "submit").attr("value", "Enviar");
            let select = $("#method");

            $("#method").change(function(){
                let method = $(this).val();
                let form = $("#form");

                form.empty();
                form.append(select);
                let br = $("<br>");
                let tabla = juegos[method];

                tabla.forEach(function(campo) {
                    let label = $("<label>").text(campo.label);
                    let input = $("<input>")
                        .attr("type", campo.type)
                        .attr("name", campo.name)
                        .attr("placeholder", campo.placeholder);

                    form.append(label);
                    form.append(input);
                    form.append(br.clone());
                });

                form.append(submit);
            });
        });
    }
)