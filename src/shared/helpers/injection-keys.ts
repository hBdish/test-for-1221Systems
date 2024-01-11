import type { InjectionKey } from 'vue'

// функция создания ключа для экшена с типизацией
const createInjectionKeyForAction = <T, V = void>(key: string) => {
  const Key: InjectionKey<(event: T) => V> = Symbol(key)
  return Key
}

// функция создания ключа для поля с типизацией
const createInjectionKeyForProperty = <T>(key: string) => {
  const Key: InjectionKey<T> = Symbol(key)
  return Key
}

export { createInjectionKeyForProperty, createInjectionKeyForAction }
