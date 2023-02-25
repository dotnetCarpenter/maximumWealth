module MyLib (maximumWealth) where

maximumWealth :: [[Int]] -> Int
maximumWealth = maximum . map sum
