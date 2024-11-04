import { useSelector } from 'react-redux'

const Counter = () => {
  const counterValue = useSelector((state) => state.test.value);
  return (
    <div>{counterValue * 10}</div>
  )
}

export default Counter