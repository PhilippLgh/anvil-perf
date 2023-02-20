# Anvil Performance Tests

Install dependencies: `yarn`

## Run on Hardhat Node

`yarn test`

**Output**
```shell
test data ready 66
write data chunk 0 150 after 0 ms
write data chunk 1 150 after 110 ms
write data chunk 2 150 after 196 ms
write data chunk 3 150 after 277 ms
write data chunk 4 150 after 357 ms
write data chunk 5 150 after 440 ms
write data chunk 6 150 after 520 ms
write data chunk 7 150 after 604 ms
write data chunk 8 150 after 693 ms
write data chunk 9 150 after 791 ms
write data chunk 10 150 after 872 ms
write data chunk 11 150 after 952 ms
write data chunk 12 150 after 1044 ms
write data chunk 13 150 after 1124 ms
write data chunk 14 150 after 1204 ms
write data chunk 15 150 after 1284 ms
write data chunk 16 150 after 1377 ms
write data chunk 17 150 after 1456 ms
write data chunk 18 150 after 1535 ms
write data chunk 19 150 after 1616 ms
write data chunk 20 150 after 1694 ms
write data chunk 21 150 after 1788 ms
write data chunk 22 150 after 1869 ms
write data chunk 23 150 after 1949 ms
write data chunk 24 150 after 2029 ms
write data chunk 25 150 after 2109 ms
write data chunk 26 150 after 2193 ms
write data chunk 27 150 after 2288 ms
write data chunk 28 150 after 2369 ms
write data chunk 29 150 after 2451 ms
write data chunk 30 150 after 2533 ms
write data chunk 31 150 after 2613 ms
write data chunk 32 150 after 2694 ms
write data chunk 33 150 after 2791 ms
write data chunk 34 150 after 2872 ms
write data chunk 35 150 after 2954 ms
write data chunk 36 150 after 3036 ms
write data chunk 37 150 after 3118 ms
write data chunk 38 150 after 3197 ms
write data chunk 39 150 after 3278 ms
write data chunk 40 150 after 3360 ms
write data chunk 41 150 after 3443 ms
write data chunk 42 150 after 3526 ms
write data chunk 43 150 after 3609 ms
write data chunk 44 150 after 3692 ms
write data chunk 45 150 after 3774 ms
write data chunk 46 150 after 3855 ms
write data chunk 47 150 after 3938 ms
write data chunk 48 150 after 4020 ms
write data chunk 49 150 after 4122 ms
write data chunk 50 150 after 4204 ms
write data chunk 51 150 after 4287 ms
write data chunk 52 150 after 4368 ms
write data chunk 53 150 after 4453 ms
write data chunk 54 150 after 4537 ms
write data chunk 55 150 after 4619 ms
write data chunk 56 150 after 4700 ms
write data chunk 57 150 after 4782 ms
write data chunk 58 150 after 4865 ms
write data chunk 59 150 after 4946 ms
write data chunk 60 150 after 5029 ms
write data chunk 61 150 after 5111 ms
write data chunk 62 150 after 5195 ms
write data chunk 63 150 after 5280 ms
write data chunk 64 150 after 5367 ms
write data chunk 65 150 after 5454 ms
```

## Run on Anvil

`yarn testnet:anvil` to start the node on separate port

separate terminal:
`yarn test:anvil` to run tests on anvil

**Output**

```shell
WriteData
test data ready 66
write data chunk 0 150 after 0 ms
write data chunk 1 150 after 24 ms
write data chunk 2 150 after 40 ms
write data chunk 3 150 after 58 ms
write data chunk 4 150 after 73 ms
write data chunk 5 150 after 93 ms
write data chunk 6 150 after 111 ms
write data chunk 7 150 after 129 ms
write data chunk 8 150 after 155 ms
write data chunk 9 150 after 179 ms
write data chunk 10 150 after 196 ms
write data chunk 11 150 after 215 ms
write data chunk 12 150 after 230 ms
write data chunk 13 150 after 252 ms
write data chunk 14 150 after 4281 ms
write data chunk 15 150 after 8314 ms
write data chunk 16 150 after 12347 ms
write data chunk 17 150 after 16370 ms
write data chunk 18 150 after 20397 ms
write data chunk 19 150 after 24432 ms
write data chunk 20 150 after 28466 ms
write data chunk 21 150 after 32498 ms
write data chunk 22 150 after 36527 ms
write data chunk 23 150 after 40558 ms
write data chunk 24 150 after 44594 ms
write data chunk 25 150 after 48625 ms
write data chunk 26 150 after 52657 ms
write data chunk 27 150 after 56687 ms
=> timeout
```