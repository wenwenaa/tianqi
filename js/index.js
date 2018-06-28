$(function(){
	let weather;
	$.ajax({
		url:'https://www.toutiao.com/stream/widget/local_weather/data/?city=太原',
		dataType:'jsonp',
		success:function(obj){   //请求成功后执行的函数
        weather=obj.data.weather
        console.log(weather)
        render()
    }
	})
	function render(){
     $(".location p").html(weather.city_name) //城市名
     $(".land #wendu").html("&nbsp;"+weather.current_temperature+"°")//当前温度
     $("#zhuangku").html(weather.current_condition)//当前天气状况
     $("#feng").html(weather.wind_direction+"&nbsp;"+weather.wind_level+"级")//当前风速
     $("#today").html(weather.high_temperature+"/"+weather.low_temperature+"°")//今天的高温和低温
     $("#towe").html(weather.current_condition)//今天天气状况
     $("#tomo").html(weather.tomorrow_high_temperature+"/"+weather.tomorrow_low_temperature+"°")//明天的高温和低温
     $("#mowe").html(weather.tomorrow_condition)//明天天气状况
     $("#topic").attr("src",`img/${weather.weather_icon_id}.png`)
     $("#mopic").attr("src",`img/${weather.tomorrow_weather_icon_id}.png`)
     $("#til").html(weather.quality_level)//天气质量
     $("#value").html(weather.aqi)
   //时间
     weather.hourly_forecast.forEach(function(element,index){
        let strs=`<li>
                <p class="time">${element.hour}:00</p>
                <img src=img/${element.weather_icon_id}.png alt="">
                <p class="degree">${element.temperature}°</p>
            </li>`
            $(".hours ul").append(strs)
    })
     //日期
     weather.forecast_list.forEach(function(element,index){
        let tr=`<li>
                <p id="ri">${element.date.slice(5,10)}</p>
                <p>${element.condition}</p>
                <img src=img/${element.weather_icon_id}.png alt="">
                <p>${element.high_temperature}°</p>
                <p>${element.low_temperature}°</p>
                <img src="img/${element.weather_icon_id}.png" alt="">
                <p id="ri">${element.wind_direction}</p>
                <p id="ri">${element.wind_level}级</p>
            </li>`
            $(".days ul").append(tr)
     })
	}
   

})