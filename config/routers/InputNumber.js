export default {
  path: '/dataInput/inputNumber',
  name: 'inputNumber',
  icon: 'inputNumber',
  component: './DataInput/InputNumber',
  routes:[
    {
      path: '/dataInput/inputNumber',
      redirect: '/dataInput/inputNumber/01',
    },
    {
      path: '/dataInput/inputNumber/01',
      component: './DataInput/InputNumber/Index01',
    },
    {
      path: '/dataInput/inputNumber/02',
      component: './DataInput/InputNumber/Index02',
    },
    {
      path: '/dataInput/inputNumber/03',
      component: './DataInput/InputNumber/Index03',
    },
    {
      path: '/dataInput/inputNumber/04',
      component: './DataInput/InputNumber/Index04',
    },
    {
      path: '/dataInput/inputNumber/05',
      component: './DataInput/InputNumber/Index05',
    },
  ]
}
