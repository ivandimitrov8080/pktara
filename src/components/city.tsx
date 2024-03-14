type Props = {
  name: string
  left: number
  top: number
}

export default function City({ name, left, top }: Props) {

  return (
    <div className={`absolute bg-rose-500 z-50 w-max h-max`}
      style={{
        left: `${left}px`,
        top: `${top}px`
      }}>
      {name}
    </div>
  );
}
