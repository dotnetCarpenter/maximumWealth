module Main where

import qualified MyLib (maximumWealth)

main :: IO ()
main = do
  putStrLn (show (MyLib.maximumWealth [[1,2,3],[5,5,5],[3,1,4]]))

