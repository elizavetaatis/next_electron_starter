'use client'

import { useEffect, useState } from 'react'

export default function Test() {
  const [message, setMessage] = useState('Waiting for message...');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.ipc) {
      // Отправляем сообщение в main
      window.ipc.send('message', 'Hello')

      // Получаем ответ от main
      window.ipc.receive('message', (data: string) => {
        setMessage(data)
      })
    }
  }, [])

  return (
    <div className="flex justify-flex-start items-flex-start h-auto">
      <h1 className="text-2xl font-bold">{message}</h1>
    </div>
  )
}
