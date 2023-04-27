function generateChart(){
    //Fetch data.json
    fetch('./data.json')
        .then((res)=> res.json())
        .then((data) => {
            const info= {
                //Days
                labels: data.map((chart)=>chart.day), 
                datasets:[
                {
                    //Amount
                    data: data.map((chart) =>chart.amount),
                    backgroundColor:[
                        "hsl(10, 79%, 65%)",
                        "hsl(10, 79%, 65%)",
                        "hsl(186, 34%, 60%)",
                        "hsl(10, 79%, 65%)",
                        "hsl(10, 79%, 65%)",
                        "hsl(10, 79%, 65%)",
                        "hsl(10, 79%, 65%)",
                    ],    
                    borderRadius: 5,
                    hoverBackgroundColor:[
                        "hsl(10, 79%, 73%)",
                        "hsl(10, 79%, 73%)",
                        "hsl(186, 34%, 70%)",
                        "hsl(10, 79%, 73%)",
                        "hsl(10, 79%, 73%)",
                        "hsl(10, 79%, 73%)",
                        "hsl(10, 79%, 73%)",
                    ],
                }
                ]
            }
            //$ sign
            const titleTooltip=(e)=>`$${e[0].formattedValue}`;
            const labelTooltip = (e) => "";
            const options = {
                scales:{
                    y: {
                        ticks:{
                            display:false,
                        },
                    grid: {
                        display: false,
                        drawTicks:false,
                        drawBorder:false
                    },     
                    },
                    x: {
                        grid: {
                            display: false,
                            drawBorder:false,
                        }
                    }
                },
                plugins: {
                    legend: {
                        display:false,
                    },
                    tooltip:{
                        yAlign:"bottom",
                        backgroundColor:"hsl(25, 47%, 15%)",
                        caretSize: 0,
                        titleMarginBottom:0,
                        callbacks:{
                            title:titleTooltip,
                            label:labelTooltip,
                        }
                    }
                }
            }
            const config ={
                //Bar Chart
                type:"bar",
                data:info,
                options
            }
            const myChart = new Chart(document.getElementById('myChart'), config)
        })
}
generateChart();
