/**
 * Created by Administrator on 2016/9/20.
 */
$(function () {
        var map = new BMap.Map("allmap");
        function myFun(result){
            var cityName = result.name;
            $('.main_locate_city').empty();
            $('.main_locate_city').append(cityName);
            localStorage.setItem('city',cityName);
        }
        var myCity = new BMap.LocalCity();
        myCity.get(myFun);
    // })
})