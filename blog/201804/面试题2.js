/**
 * 某停车场，分3层，每层100车位
 * 每个车位都能监控到车辆的驶入和离开
 * 车辆进入前，显示每层的空余车位数量
 * 车辆进入时，摄像头可识别车牌号和时间
 * 车辆出来时，出口显示器显示车牌号和停车时长
 */
//车辆
class Car {
    constructor(num) {
        this.num = num;
    }
}
//摄像头
class Camera{
    shot(car) {
        return {
            num:car.num,
            inTime: Date.now()
        }
    }
}
//出口显示屏
class Screen{
    show(car, inTime) {
        console.log('车牌号', car.num)
        console.log('停车时间',Date.now()- inTime)
    }
}
 //停车场
class Park {
    constructor(floors) {
        this.floors = floors || []
        this.camera = new Camera()
        this.screen = new Screen()
        this.carList ={}//存储摄像头拍摄返回的车辆信息
     }
    in(car) {
        //通过摄像头获取信息
        const info = this.camera.shot(car)
        // 停到某个停车位
        const i = parseInt(Math.random() * 100 % 100 );
        const place = this.floor[0].place[i]
        place.in()
        info.place=place;
        this.carList[car.num] =info;
    }
    out(car) {
        //获取信息
        const info = this.carList[car.num];
        //将停车位清空
        const place = info.place;
        place.out()
        //显示时间
        this.screen.show(car, info.inTime)
        //清空记录
        delete this.carList[car.num]
    }
    emptyNum() {
        return this.floors.map(floor => {
            return `${floor.index}层还有${floor.emptyPlaceNum}个空闲车位`
        }).join('\n')
    }
}
// 层 
class floors {
    constructor(index, places) {
        this.index = index;
        this.places = places || []
    }
    //这层多少空车位
    emtyPlaceNum() {
        let num = 0;
        this.places.forEach(p => {
            if(p.empty) {
                num = num+1
            }
        });
        return num;
    }
}
//车位
class Place {
    constructor() {
        this.empty = true;
    }
    in() {
        this.empty= false;
    }
    out() {
        this.empty= true;
    }
}
// 测试
//初始化停车场
const floors = []
for (let index = 0; index < array.length; index++) {
    
}