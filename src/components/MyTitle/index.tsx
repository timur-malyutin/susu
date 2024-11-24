import clsx from 'clsx'

import styles from './styles.module.css'

interface ComponentProps extends React.ComponentProps<'h1'> {
  primary?: boolean
  title: string
}

export function MyTitle({ primary = false, title, ...props }: ComponentProps) {
  const style = clsx(styles.title, {
    [styles['title--primary']]: primary,
  })

  return (
    <h1
      className={style}
      {...props}
    >
      {title}
    </h1>
  )
}
