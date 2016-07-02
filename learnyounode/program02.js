var sum = 0;
for (var cnt = 2; cnt < process.argv.length; ++cnt)
{
	sum += Number(process.argv[cnt]);
}
console.log(sum);
