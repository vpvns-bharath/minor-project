//loading the page
$(document).ready(function(){
  // interacting with api
   var url="https://api.covid19india.org/data.json#"
 // parsing the api data
  $.getJSON(url,function(data){
// retrieving and displaying the necessary data
    var total_confirmed,total_active,total_recovered,total_deaths;
    total_active=data.statewise[0].active
    total_confirmed=data.statewise[0].confirmed
    total_deaths=data.statewise[0].deaths
    total_recovered=data.statewise[0].recovered

    $("#Confirmed").append(total_confirmed)
    $("#Active").append(total_active)
    $("#Recovered").append(total_recovered)
    $("#Deaths").append(total_deaths)

    // plotting the data on chart

    var deaths=[]
    var recovered=[]
    var active=[]
    var states=[]
    var confirmed=[]

    $.each(data.statewise,function(id,obj){
      states.push(obj.state)
      active.push(obj.active)
      recovered.push(obj.recovered)
      deaths.push(obj.deaths)
      confirmed.push(obj.confirmed)
    })

    // neglecting the first element in each array
    states.shift()
    active.shift()
    recovered.shift()
    deaths.shift()
    confirmed.shift()


    var mychart=document.getElementById("myChart").getContext('2d')

    var chart=new Chart(mychart,{
      type:'line',
      data:{
        labels:states,
        datasets:[{
          label:"Confirmed Cases",
          data:confirmed,
          backgroundColor:"yellow",
          minBarLength:100
        },
        {
          label:"Recovered Cases",
          data:recovered,
          backgroundColor:"green",
          minBarLength:100
      },
    {
      label:"Active Cases",
      data:active,
      backgroundColor:"red",
      minBarLength:100
    },
  {
    label:"Deaths",
    data:deaths,
    backgroundColor:"black",
    minBarLength:100
  }]
      },
      options:{}
    })


  })
})
