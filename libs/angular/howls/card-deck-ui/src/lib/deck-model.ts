export const SPADES = 0
export const CLUBS = 1
export const HEARTS = 2
export const DIAMONDS = 3
export const suitNames = ["spades", "clubs", "hearts", "diamonds"]

export interface DeckModel {
  cards: Card[]
}
export interface Card {
  s?: string;
  symbol: string;
  label: string;
  rank: number;
  value: number;
  suit : Suit;
}

export interface Suit {
  label: string;
  symbol: string;
  color: string;
}
