// Shuffle list
export function shuffle(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
   		const r = Math.floor(Math.random() * (i + 1));
   		[arr[i], arr[r]] = [arr[r], arr[i]];
 	}
	return arr;
}