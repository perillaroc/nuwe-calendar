import { Calendar } from '../../src/index'

let s =[{"Date":"2016/1/1","value":-1},{"Date":"2016/1/2","value":-1},{"Date":"2016/1/3","value":-1},{"Date":"2016/1/4","value":-1},{"Date":"2016/1/5","value":-1},{"Date":"2016/1/6","value":-1},{"Date":"2016/1/7","value":-1},{"Date":"2016/1/8","value":-1},{"Date":"2016/1/9","value":-1},{"Date":"2016/1/10","value":-1},{"Date":"2016/1/11","value":-1},{"Date":"2016/1/12","value":-1},{"Date":"2016/1/13","value":-1},{"Date":"2016/1/14","value":-1},{"Date":"2016/1/15","value":-1},{"Date":"2016/1/16","value":-1},{"Date":"2016/1/17","value":-1},{"Date":"2016/1/18","value":0},{"Date":"2016/1/19","value":1},{"Date":"2016/1/20","value":1},{"Date":"2016/1/21","value":0},{"Date":"2016/1/22","value":15},{"Date":"2016/1/23","value":0},{"Date":"2016/1/24","value":8},{"Date":"2016/1/25","value":-1},{"Date":"2016/1/26","value":-1},{"Date":"2016/1/27","value":-1},{"Date":"2016/1/28","value":-1},{"Date":"2016/1/29","value":-1},{"Date":"2016/1/30","value":-1},{"Date":"2016/1/31","value":-1},{"Date":"2016/2/1","value":-1},{"Date":"2016/2/2","value":-1},{"Date":"2016/2/3","value":-1},{"Date":"2016/2/4","value":-1},{"Date":"2016/2/5","value":-1},{"Date":"2016/2/6","value":-1},{"Date":"2016/2/7","value":-1},{"Date":"2016/2/8","value":-1},{"Date":"2016/2/9","value":-1},{"Date":"2016/2/10","value":-1},{"Date":"2016/2/11","value":-1},{"Date":"2016/2/12","value":-1},{"Date":"2016/2/13","value":-1},{"Date":"2016/2/14","value":-1},{"Date":"2016/2/15","value":0},{"Date":"2016/2/16","value":0},{"Date":"2016/2/17","value":0},{"Date":"2016/2/18","value":0},{"Date":"2016/2/19","value":1},{"Date":"2016/2/20","value":1},{"Date":"2016/2/21","value":0},{"Date":"2016/2/22","value":-1},{"Date":"2016/2/23","value":-1},{"Date":"2016/2/24","value":-1},{"Date":"2016/2/25","value":-1},{"Date":"2016/2/26","value":-1},{"Date":"2016/2/27","value":-1},{"Date":"2016/2/28","value":-1},{"Date":"2016/2/29","value":-1},{"Date":"2016/3/1","value":-1},{"Date":"2016/3/2","value":-1},{"Date":"2016/3/3","value":-1},{"Date":"2016/3/4","value":-1},{"Date":"2016/3/5","value":-1},{"Date":"2016/3/6","value":-1},{"Date":"2016/3/7","value":-1},{"Date":"2016/3/8","value":-1},{"Date":"2016/3/9","value":-1},{"Date":"2016/3/10","value":-1},{"Date":"2016/3/11","value":-1},{"Date":"2016/3/12","value":-1},{"Date":"2016/3/13","value":-1},{"Date":"2016/3/14","value":-1},{"Date":"2016/3/15","value":-1},{"Date":"2016/3/16","value":-1},{"Date":"2016/3/17","value":-1},{"Date":"2016/3/18","value":-1},{"Date":"2016/3/19","value":-1},{"Date":"2016/3/20","value":-1},{"Date":"2016/3/21","value":0},{"Date":"2016/3/22","value":0},{"Date":"2016/3/23","value":1},{"Date":"2016/3/24","value":1},{"Date":"2016/3/25","value":0},{"Date":"2016/3/26","value":0},{"Date":"2016/3/27","value":0},{"Date":"2016/3/28","value":-1},{"Date":"2016/3/29","value":-1},{"Date":"2016/3/30","value":-1},{"Date":"2016/3/31","value":-1},{"Date":"2016/4/1","value":-1},{"Date":"2016/4/2","value":-1},{"Date":"2016/4/3","value":-1},{"Date":"2016/4/4","value":-1},{"Date":"2016/4/5","value":-1},{"Date":"2016/4/6","value":-1},{"Date":"2016/4/7","value":-1},{"Date":"2016/4/8","value":-1},{"Date":"2016/4/9","value":-1},{"Date":"2016/4/10","value":-1},{"Date":"2016/4/11","value":-1},{"Date":"2016/4/12","value":-1},{"Date":"2016/4/13","value":-1},{"Date":"2016/4/14","value":-1},{"Date":"2016/4/15","value":-1},{"Date":"2016/4/16","value":-1},{"Date":"2016/4/17","value":-1},{"Date":"2016/4/18","value":-1},{"Date":"2016/4/19","value":-1},{"Date":"2016/4/20","value":-1},{"Date":"2016/4/21","value":-1},{"Date":"2016/4/22","value":-1},{"Date":"2016/4/23","value":-1},{"Date":"2016/4/24","value":-1},{"Date":"2016/4/25","value":1},{"Date":"2016/4/26","value":1},{"Date":"2016/4/27","value":1},{"Date":"2016/4/28","value":0},{"Date":"2016/4/29","value":-1},{"Date":"2016/4/30","value":-1},{"Date":"2016/5/1","value":-1},{"Date":"2016/5/2","value":-1},{"Date":"2016/5/3","value":-1},{"Date":"2016/5/4","value":-1},{"Date":"2016/5/5","value":-1},{"Date":"2016/5/6","value":-1},{"Date":"2016/5/7","value":-1},{"Date":"2016/5/8","value":-1},{"Date":"2016/5/9","value":-1},{"Date":"2016/5/10","value":-1},{"Date":"2016/5/11","value":-1},{"Date":"2016/5/12","value":-1},{"Date":"2016/5/13","value":-1},{"Date":"2016/5/14","value":-1},{"Date":"2016/5/15","value":-1},{"Date":"2016/5/16","value":1},{"Date":"2016/5/17","value":0},{"Date":"2016/5/18","value":0},{"Date":"2016/5/19","value":0},{"Date":"2016/5/20","value":4},{"Date":"2016/5/21","value":1},{"Date":"2016/5/22","value":1},{"Date":"2016/5/23","value":-1},{"Date":"2016/5/24","value":-1},{"Date":"2016/5/25","value":-1},{"Date":"2016/5/26","value":-1},{"Date":"2016/5/27","value":-1},{"Date":"2016/5/28","value":-1},{"Date":"2016/5/29","value":-1},{"Date":"2016/5/30","value":-1},{"Date":"2016/5/31","value":-1},{"Date":"2016/6/1","value":-1},{"Date":"2016/6/2","value":-1},{"Date":"2016/6/3","value":-1},{"Date":"2016/6/4","value":-1},{"Date":"2016/6/5","value":-1},{"Date":"2016/6/6","value":-1},{"Date":"2016/6/7","value":-1},{"Date":"2016/6/8","value":-1},{"Date":"2016/6/9","value":-1},{"Date":"2016/6/10","value":-1},{"Date":"2016/6/11","value":-1},{"Date":"2016/6/12","value":-1},{"Date":"2016/6/13","value":-1},{"Date":"2016/6/14","value":-1},{"Date":"2016/6/15","value":-1},{"Date":"2016/6/16","value":-1},{"Date":"2016/6/17","value":-1},{"Date":"2016/6/18","value":-1},{"Date":"2016/6/19","value":-1},{"Date":"2016/6/20","value":4},{"Date":"2016/6/21","value":1},{"Date":"2016/6/22","value":0},{"Date":"2016/6/23","value":2},{"Date":"2016/6/24","value":1},{"Date":"2016/6/25","value":2},{"Date":"2016/6/26","value":2},{"Date":"2016/6/27","value":-1},{"Date":"2016/6/28","value":-1},{"Date":"2016/6/29","value":-1},{"Date":"2016/6/30","value":-1},{"Date":"2016/7/1","value":-1},{"Date":"2016/7/2","value":-1},{"Date":"2016/7/3","value":-1},{"Date":"2016/7/4","value":-1},{"Date":"2016/7/5","value":-1},{"Date":"2016/7/6","value":-1},{"Date":"2016/7/7","value":-1},{"Date":"2016/7/8","value":-1},{"Date":"2016/7/9","value":-1},{"Date":"2016/7/10","value":-1},{"Date":"2016/7/11","value":-1},{"Date":"2016/7/12","value":-1},{"Date":"2016/7/13","value":-1},{"Date":"2016/7/14","value":-1},{"Date":"2016/7/15","value":-1},{"Date":"2016/7/16","value":-1},{"Date":"2016/7/17","value":-1},{"Date":"2016/7/18","value":-1},{"Date":"2016/7/19","value":-1},{"Date":"2016/7/20","value":-1},{"Date":"2016/7/21","value":-1},{"Date":"2016/7/22","value":-1},{"Date":"2016/7/23","value":-1},{"Date":"2016/7/24","value":-1},{"Date":"2016/7/25","value":6},{"Date":"2016/7/26","value":7},{"Date":"2016/7/27","value":5},{"Date":"2016/7/28","value":3},{"Date":"2016/7/29","value":1},{"Date":"2016/7/30","value":0},{"Date":"2016/7/31","value":4},{"Date":"2016/8/1","value":-1},{"Date":"2016/8/2","value":-1},{"Date":"2016/8/3","value":-1},{"Date":"2016/8/4","value":-1},{"Date":"2016/8/5","value":-1},{"Date":"2016/8/6","value":-1},{"Date":"2016/8/7","value":-1},{"Date":"2016/8/8","value":-1},{"Date":"2016/8/9","value":-1},{"Date":"2016/8/10","value":-1},{"Date":"2016/8/11","value":-1},{"Date":"2016/8/12","value":-1},{"Date":"2016/8/13","value":-1},{"Date":"2016/8/14","value":-1},{"Date":"2016/8/15","value":-1},{"Date":"2016/8/16","value":-1},{"Date":"2016/8/17","value":-1},{"Date":"2016/8/18","value":-1},{"Date":"2016/8/19","value":-1},{"Date":"2016/8/20","value":-1},{"Date":"2016/8/21","value":-1},{"Date":"2016/8/22","value":0},{"Date":"2016/8/23","value":9},{"Date":"2016/8/24","value":2},{"Date":"2016/8/25","value":0},{"Date":"2016/8/26","value":0},{"Date":"2016/8/27","value":1},{"Date":"2016/8/28","value":0},{"Date":"2016/8/29","value":-1},{"Date":"2016/8/30","value":-1},{"Date":"2016/8/31","value":1},{"Date":"2016/9/1","value":-1},{"Date":"2016/9/2","value":-1},{"Date":"2016/9/3","value":0},{"Date":"2016/9/4","value":-1},{"Date":"2016/9/5","value":-1},{"Date":"2016/9/6","value":0},{"Date":"2016/9/7","value":-1},{"Date":"2016/9/8","value":-1},{"Date":"2016/9/9","value":-1},{"Date":"2016/9/10","value":-1},{"Date":"2016/9/11","value":-1},{"Date":"2016/9/12","value":-1},{"Date":"2016/9/13","value":-1},{"Date":"2016/9/14","value":-1},{"Date":"2016/9/15","value":-1},{"Date":"2016/9/16","value":-1},{"Date":"2016/9/17","value":-1},{"Date":"2016/9/18","value":-1},{"Date":"2016/9/19","value":-1},{"Date":"2016/9/20","value":-1},{"Date":"2016/9/21","value":-1},{"Date":"2016/9/22","value":-1},{"Date":"2016/9/23","value":-1},{"Date":"2016/9/24","value":-1},{"Date":"2016/9/25","value":-1},{"Date":"2016/9/26","value":-1},{"Date":"2016/9/27","value":-1},{"Date":"2016/9/28","value":-1},{"Date":"2016/9/29","value":-1},{"Date":"2016/9/30","value":-1},{"Date":"2016/10/1","value":-1},{"Date":"2016/10/2","value":-1},{"Date":"2016/10/3","value":-1},{"Date":"2016/10/4","value":-1},{"Date":"2016/10/5","value":1},{"Date":"2016/10/6","value":0},{"Date":"2016/10/7","value":4},{"Date":"2016/10/8","value":0},{"Date":"2016/10/9","value":0},{"Date":"2016/10/10","value":-1},{"Date":"2016/10/11","value":-1},{"Date":"2016/10/12","value":-1},{"Date":"2016/10/13","value":-1},{"Date":"2016/10/14","value":-1},{"Date":"2016/10/15","value":-1},{"Date":"2016/10/16","value":-1},{"Date":"2016/10/17","value":-1},{"Date":"2016/10/18","value":-1},{"Date":"2016/10/19","value":-1},{"Date":"2016/10/20","value":-1},{"Date":"2016/10/21","value":-1},{"Date":"2016/10/22","value":-1},{"Date":"2016/10/23","value":-1},{"Date":"2016/10/24","value":-1},{"Date":"2016/10/25","value":-1},{"Date":"2016/10/26","value":-1},{"Date":"2016/10/27","value":-1},{"Date":"2016/10/28","value":-1},{"Date":"2016/10/29","value":-1},{"Date":"2016/10/30","value":-1},{"Date":"2016/10/31","value":1},{"Date":"2016/11/1","value":5},{"Date":"2016/11/2","value":1},{"Date":"2016/11/3","value":0},{"Date":"2016/11/4","value":1},{"Date":"2016/11/5","value":1},{"Date":"2016/11/6","value":0},{"Date":"2016/11/7","value":-1},{"Date":"2016/11/8","value":-1},{"Date":"2016/11/9","value":-1},{"Date":"2016/11/10","value":-1},{"Date":"2016/11/11","value":-1},{"Date":"2016/11/12","value":-1},{"Date":"2016/11/13","value":-1},{"Date":"2016/11/14","value":-1},{"Date":"2016/11/15","value":-1},{"Date":"2016/11/16","value":-1},{"Date":"2016/11/17","value":-1},{"Date":"2016/11/18","value":-1},{"Date":"2016/11/19","value":-1},{"Date":"2016/11/20","value":-1},{"Date":"2016/11/21","value":-1},{"Date":"2016/11/22","value":-1},{"Date":"2016/11/23","value":-1},{"Date":"2016/11/24","value":-1},{"Date":"2016/11/25","value":-1},{"Date":"2016/11/26","value":-1},{"Date":"2016/11/27","value":-1},{"Date":"2016/11/28","value":-1},{"Date":"2016/11/29","value":-1},{"Date":"2016/11/30","value":-1},{"Date":"2016/12/1","value":-1},{"Date":"2016/12/2","value":-1},{"Date":"2016/12/3","value":-1},{"Date":"2016/12/4","value":-1},{"Date":"2016/12/5","value":0},{"Date":"2016/12/6","value":0},{"Date":"2016/12/7","value":0},{"Date":"2016/12/8","value":1},{"Date":"2016/12/9","value":3},{"Date":"2016/12/10","value":2},{"Date":"2016/12/11","value":0},{"Date":"2016/12/12","value":-1},{"Date":"2016/12/13","value":-1},{"Date":"2016/12/14","value":-1},{"Date":"2016/12/15","value":-1},{"Date":"2016/12/16","value":-1},{"Date":"2016/12/17","value":-1},{"Date":"2016/12/18","value":-1},{"Date":"2016/12/19","value":-1},{"Date":"2016/12/20","value":-1},{"Date":"2016/12/21","value":-1},{"Date":"2016/12/22","value":-1},{"Date":"2016/12/23","value":-1},{"Date":"2016/12/24","value":-1},{"Date":"2016/12/25","value":-1},{"Date":"2016/12/26","value":-1},{"Date":"2016/12/27","value":-1},{"Date":"2016/12/28","value":-1},{"Date":"2016/12/29","value":-1},{"Date":"2016/12/30","value":-1},{"Date":"2016/12/31","value":-1}];


let config = {data: s};
let chart = new Calendar('#chart_container', config);