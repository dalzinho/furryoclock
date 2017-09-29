const config = require('./config');
// ^^^ required for twitter api
// const spotifyAccessToken = require('./spotifyAccessToken');
const spotifyConfig = require('./spotifyConfig');
var Twit = require('twit');
var SpotifyWebApi = require('spotify-web-api-node');
var T = new Twit(config);
var spotify = new SpotifyWebApi(spotifyConfig);

allTracks = ['2hkrRDbSRxDAiSYU5aXEQp','7wC2Ud5m9zfIgq84PbHkEo','19EhIKFfwi6Xti8V7rJFbI','4i3MlcPGvlZG3wkS3W0z72','3Iiu5tkOOm90H58E99UBkQ','1Wtv7Hd9JHOpbvxsUE8UWL','3WOD9sKw3dnb6d7HQ27FdD','6soXPoTcmbzL3UKkS7m6Ri','5cJvoXzXmYP2szj1vZxULX','19MET0loowQ66b80YA1ZhQ','1edKThr3OP4mGs978GIDCZ','6ogXxL5smArRvpKBLWoRVg','7B4touvRbZ2TyY9kyGpk01','69aVo4gwF5gpgCavEIp6de','5bhs9Tg7q4WSmyOcpqxWs5','49UtdGoDOeXgsQUG3iHx5N','1Sae3mQMSYTwdpfGw3rv3y','6AxlC5Tye9ncOHIP9r7TF5','3r6DLNeJwTPVYSH5axHxcj','6ESVMk0wWSduWe5GZdi3ig','6D2jQfVvGVhdZ5X6xc5AZS','5FfGmZFxHsZQPDc7CTmAF8','1YJjeZHXmKcgSnFsDeyYqh','4Mvf0EJF9f6wO8dVhvgMtH','0fHI7VRxCDULcUhqTC9DP1','5WxwZZybfLkZ63npRoShrA','0R8mmQfjIhRtflKPh1hjVO','1ldJ5kRgjTQgNum6P6ABKS','6rCKsQUMIQYE01FZhnK60K','11x8l1RaIonRbrolRTTuJN','4krDixUIT0Gj4q9iEl7SiO','1KtuAs87Y56T2PxhYDpp3m','0E1zQ5s4W1eOExdoR9Oung','1ic5mPd5Jw66Nnmi5gOwBo','7ger3Y29kkJKAxHxYhFYDp','3bDOnHUF0FcoQDwboJFSsN','6PDboW6BRNbdxIznkpz1KW','2jc4u6qv35sq1c2Px6KOhP','7Mq59S6Ol8pL8LNxI020fQ','3IARhePkr6k5szsbwMBTt5','07op5IfY9lJTpXusevgCEH','3XcLWN4kKkZ3qJiUxIEJ7x','2I8SQbgqsjz3rjSQaLyqkJ','3soRUdZmGMgzltLy9e7jgl','0vGJMzTK03NckJTtZq4JPl','1Pdch7XtG1Sjqs6KrW1CVz','0LpPsg158vzrLa5sYzsitU','6KuPeyrlcPnwSHvKlMtNzZ','4zCkguSkd6fOl1KnpZpBQI','6KTSS3Ob5Iae4x5z02kBV6','0ztbzEBnqwSZZYLcUODvJV','2yQiqFseh4nQJOgGk6KajK','06CdQ74Lcrb8Tss4cMlycb','0Fwz3RlJy6Zn1vXqRa3HCY','6S6XE1A00QSdQioypkAcUK','7g6RNvEEpoVDL0nnRLImir','3oo1myK2pyR1BZoIKPeVxE','6JvMu03GdmEwJvMRVWIzkk','5ildNUxTHm6Mk12OrysxTy','5YT4GBX7crhp0gYXcQjDkc','2f7bDC6ZUbZ63oH1tCSIyk','5PCu94Opg2gFF8YXTIYavB','1HfNsthTTiWQ1PgnhU11lr','6TwRZNUdbuCcfo65DXpOv7','4mV9oymka7Tos5bq4XSyQg','0aeDibF3PIiHJcMVTOPrZF','6V5a8TgCGTRvkM0MYbgTK0','3NddwqkdJxS4n0MkVMnMoh','25SomfugAxO3rKyomk0imh','52oSE3jxiyJrnhGyPS1CEp','1NlygKfingPtwnefh40cKg','7KUjvoZQU454abg8LIsyD4','0JjBD0jU0BNow7UpixP14N','1EId0VSMseIINythRErU1J','3z0wwEbdUx6tWln029NbDe','4WFY46KXDdcZ9CYbxyJTsk','5Xdm0O7JBUI2T2dQoEdlVZ','7qLlwbY4jeUC9VufifLKNz','19VJ09vR1sdnpmooukMrZZ','19VuSSWc33zhW3UqX4fbio','2tfS4DHbFyk69QdDyrjsye','5NlIGIjHPlQ8UtK7sUBBan','14S2OSRun13tK9UHTRxZNS','02xH1XSTICmQHYhWlHINd4','3uOgMb4ZaABNAgJF6f3xwO','767RQMX8io7ViS8KDNt64Y','2U1gflrt9EDXzAIOSUqxjF','1c5eaQMHBuygp1uQ5JAEs1','1Ruf799cx6d6ekaeZpPaYy','69CZHwJTt5iV3MNJ1aAHH1','4CUCYQb6UG4dtzvKgsN0Bo','7olViw1eYcDqqvzEZK0mbF','6WvZEHSi0Y9DlSW94aJ4Fv','34QI1nxJVvm3yL30uPb9Cu','1dvJwfpITCPoYwwS4sXUZq','2ZhddevjMhVNBhxO2eQakO','1QzQNDGULaGtm1oKtZfIzg','53BcK503TicZJvaHZobJgj','2Zcaqp5z6ekhpfy9CjHjts','1yQcD1ao9bUW4TMTc40ErH','57RZlXpUcG1Wc5KPQF8fst','5JlRGGgsByo9rV6bza3P2H','1JhmMcWadaMHRBdlfsTW1k','6nenat2Gsoc97h5zxAfyHW','30vNtuQjknAbiOB0IV2KaA','3bz8A6AO48fcmJkEftTgz2','0MMCxwTkC2nEM5wtsLcmYq','5HopTEmO3Y0JFb3XDbUujZ','4JkOCFNOe4cjTPQKikx8Tu','5GTqfXRwUUXJsrn0KbcmKK','6JMA4xWVuNLsnfXvaY3J8P','7CO5IuFiKxhkENy5rketvb','7vvL5VnqwdQUJjTasUEC5y','4ls51qCfNpuoJ0yYb7kdWs','56S21F2EhQ5LEvzclmKxPx','4JpalmxAKg1mVP5U2H2fhl','7iJUmUMMNIDrBU2VGsuXsu','58V3oWkCst0kNxFn37LVqE','4Ij7to6Jebknc0KDR1b0MO','4H6YWE8uR6skeyZtxIa6g4','2VyoEsEbotAsXinjarO2Jf','1kTguOOJNQgRndz17nJedr','4gfES6RCRMvDfK1d8yHqad','4dXrFSHG0FOxvDMHeEOUpK','5Ica83jUr3Npa1AirVl7IS','7aE60vTTMIs4saCc4TNHid','00Af8dmaszRz61Yao4pK1J','6OdOepK8ZtvP17h0ESoAaZ','6hK0ln2TayCrTbul9f3Kve','5rvy7glNYmhpiLUaiEELn2','0Mx92rsHKa9tIW9znVy82j','2RVMza1inWpBattKPfrzeK','6RGiDMLN1saicFmlyIJalk','6FfuA5TqTqFyTz8ogqYZPZ','1DKRgW50APtugWCU9oekwT','7LyAqs8eHNGLCf7qnvtgtb','0Bowpv8qepw7ERRuGaibU2','1rh7WxAbc7FK8gWgbFtOsP','4uTJVF15h4vWCMdF9vNuxi','4SMdIBGSMDWeD5RuGAHjS1','02E7WcBvLvfPlEHXze494l','3x7zXzIBv6KSuLqm9kpqWF','3UXJxPoTnUj6wVA16e8od5','29oq9gnllogPtg7qD8qa8R','3707JnSQrQ5aE2nUxctAnA','2SsAbQnVCXL41fk3yWvVDJ','2DeyluZ2XIEGKzxU2iUdLm','5pflatikvhN6O8Ahnriqwc','4BhXGpPlvXDwPm4CqWWkQf','0piKRmSKTe9753t6YHXeJo','6meGZeyt8kv8c64oppEV0d','5A6LXuXNuPgM2gLcWv1SS6','0Ewr70zESi3kzM0exNSIeh','3bQcRbk6EJaGGPYzjSuElP','69supsmDecQsVW7XCye3ZG','5nUAui54TMcDD9jhdY8YCX','4yIWzfsBbqGra6M4Hcfje4','4Gg9FyqnPWybSt0tE1DLE9','0m8GqMH1x4I1ZC8ZilBHxF','6rG52r3ecj22tVuPfl82N0','7vGc0WXXWLaCjEM7Iw7uhF','0si3uwBNaIAckkFbe0hQOq','6RgpAB9uQaIKWucg7twX8c','0CBbwmG3rs5xcA0PqYj8ew','1oGjCQxtjTnzv95hEQmXrO','5tPBs6qrxpAeIrvbOlvDbB','3u91rHLTcr9ovAjkJkK5dG','2t0hhP6tcijoFzN1j68KNd','0sh1fVpk8Zat6j2AITOmix','3Hn4gGwet3XyIBE5qMrK5Q','6Nmw01DADsHJnSRvfifNT3','6qdhwTUrCsS6yFCL8z39Oc','1HWiQfVrzP75gKkMbXbTi6','0eeazGqWxrZDCp5rDKeHdG','0J4lPkP14bbpxLHcRAM5FW','5OPurEaIQkj45Riwc6YFhW','6Uy7i9pT1UEHyZ1WSz8Ugl','2umbhz2teUJ8QpOl4bBD7T','4Ax19cUZre3znvcX0DvDA1','5928NjNopajBuWjQW7dzo8','5ZPScfO5ARoxEEFCOghE6H','1j6CqGmpt4nRJRsh22mrFn','2UYskXSBxSuZItsrNazJIm','0v9HXbZxWzHVXqaTGPJWKq','6XSZQwMDlTLhszUIJGbTuA','2zh2le5Nf2ASpfpXNAr03V','1igqysatRH4VybQGdfEMYV','1ijzUGVQmRYwNT6KxXUTMD','1qngIJLjTL1Jq4mHmGqwax','6BLHHj55r7T9Gqcni0hhb7','3lwGHUq70Pv46S6Zu0zH3n','6wukZVwAYi5WFtqL3iXwb8','5kAh2ODB8PIBXjp5rTVw0z','3y1DcMQxpSgVQS1qf7xjJH','5UxRmqd51sLE0unxEluXYu','3Cr0bXJGJFtMIAwCaT0CTU','7JzgjqphCt9AtTRhCO3xPo','4DJ7jkYv0fJsRc8krp51Q5','0JUDz3OsPLQsBf6mOLGhWg','2GbFyMcFI7VVxI0VnD9f4f','1WlpFSrkaU5qGHmZwuYNR6','5O1SidQtiijqRoQEkJHiDj','2b5YZ3gmgA3fMcVUhPBJcA','3IyAm8WFllTt1UixZQNJtp','3rmpK9fvSviV39KoJYR6oB','5rasftdTkKBFMhM5wanS04','5FHiFjK7MLiCiMb6aWxZQX','0039JInwcawA00ycwvXXrC','5H5IIIaHP7jFJb4hGcZrlt','0Za4gR3YPgLOM9TJE5tt78','5fkMsxBOKLEPgC7CebIt0p','6B4cTwJoDRbdjO35Gl5Q8K','1SPxsQCUXpKgOfHyQOXGis','3qaAc2w1uch2IJg2bkVxjc','1IH1Cabn7iK223ngLos5z9','0VSie0YAN0BlWhSGkoBzzy','3HFUDqsFJu9foKgbGKhpsE','1JPjnVznQ5u1rUSDze697p','7fgekaSb90X1i2HA28azbX','6RsVWUNhCLHXkDqlUoYIdE','2ZDKsKvbkWaxVYIRJ0zZuP','6v2HhtvmEBbsw76r43JgVa','6bENHCj95dY9BUfGa4SEJg','44tRK2rxaxMNvUrdZCYs4V','0WBs1qIwIN2tGcpS2z65B2','3eRtPlMjEUI3lYaKIuaFjm','05qsA6VCVZZh9CwLp4VUvq','2wxYVmb0TaSDpqlD8ZBlv4','0MvtF8fTxKCRrlJbDnNkqz','6KmkcG5RlAiOecP0G3clOT','76zxVV7d3e6NMS1woZxljY','0ZDEqQsvURpLZSLGGFT8oA','0pfQza39zCdx2LMZsPGBeH','4P04CjifoZTvT32wCIwzqv','70SzDoOIvfJlZZ71grsQnc','7h28miejAxZd2idJfA1FGQ','5I40kPZDo4PSrbp51WzIWG','52OSASN5JPT2H3VYtTDzhl','5dJebrgP4Yxpbv50zK6goV','7qM10WH9WGtVL2VgqsncT9','2jBrtl08VrXU8OCmpt9bRV','26cOl5OOjPN1m4XDJR5aOX','50XOOZgePtb0McS4S78BRF','1DexQdNQ4gRg6sJxvPfWpW','5jzB7UFZHrFZtl7mvdAAXG','3waY17omyIgIPk72UZMwcE','5XpjOpAjE4JjC4Vdrl56j0','2Ps295jbfubxmL9bT0aD06','4WnfIHnz7fL5L2VAfDgbot','3qbhPtKeLD5w4UN44oR0bE','3V1aTKl1lFq14JIefRO35G','7JzlGmut2XLe3HHQPD56Wr','3p9JXabCXpY0H9MWyKZiDq','56V8SC5oDoS30OyrhEaG9A','307MAY7sBiSJ57kbIfcVsm','55tQE42POL86fXPlZdqsVg','2v9LSdQc18dZUwK9i7o6A3','4I7ExZn5J4XvUFglUfrjS0','2pnnibjzZ9LBE2H2CffYxK','4ItR42Fza7RflsRRi2umy4','6RWcNAjrQGwfxJbBT759gX','6FWyvrh7zdh1KfaeVrz6dL','1KMZ1m03F7vmrUdpIMkbCj','6eoW3F44ko57jnk9IabKT6','2SkjPBfbBtAAHsb5wDFiSw','1AMcNROSi8t9pFsn86pKsO','3EYKtNC9hbjMCzGPfo98Mn','2sfsRDGyI77r8fa7s8YOc4','0LVtFlrMEuYcWwzdygd3oS','1uZssK890sFVwu0M97fKvD','4HBvTZZlaQ40xvcPNknMnK','4oNyo0A9DxiCXpybFH26Rc','0kTCBJQYhEC8e9HSZkDmQe','5dvE5IBeQq4rScJJsyyVEI','517ZI8eTy37xFMmrmCh6di','0vw1Iy0Wqob1xEyjpt1DZv','7J98IvVyqtZt9mfrE98lGJ','6R77ygKWm5in18dDapkMe9','5whz1JzZ7D0hOEmNyL2MOp','5ZNhJ74wm7913UFUuamToI','4wpGHgnnP4HTD7NetGVtoW','7yjW202W9CZGt1nLiq6mNM','6qPm9kqbQJjSovGZhZFNXf','4B6vo6xckb5dUmhxg2HkWG','2CbPxJZTmpAQtBkiGldP21','2nk7VvOzblBzNeUcamrEia','2Cps2WTXnZroKZOCumnRb3','15UgRZWAsAywlDLxLiQqHR','4nA7NaV7jGBM3RhcCSgf6j','5A4mQXRksinPVbDWcfPiHb','1ohbg5kHAOZ9vBJeyLQDub','5PV3JsyXuicb5o9JQwhyP9','2n6CyWvLqdkimM2oaVrBbK','6IQvNrHzwqMVwe2m3nGoBY','52NxduxeRJdPBJnNl81ePU','0aCUtEsG7xXNGzgWAIXYwj','2njSalfbEj0erumAZBim7Z','5oZi1Gmb2p7FjoNWn4L9CA','12vfr3woJrusdabSUzeA8Y','5Uf6y9uV82KUYNJ5D5iVjv','6fw4QPMCZKAC7HOsefw37p','6sO9yrLqPdRe6bYfvZypWi','5dbSbmdiSpRHQDVdbONYts','60QbZyqVhBmk19Mbl1OVai','3FpOb880uvhqc1vDZlqjNq','2cgmVkfN3xmuED0pS4X3PT','23l8xsuli59g6BFXAsemqn','0bJyhfxDaEOBjKh2RpXXrA','3qEtIDPbeqyAGxbskwmrHA','1bVz8IZD792UmpM12AuFOp','6ZkheZ45wlpj2orVdXvXED','0H7qKcbIAQWrEOgJ8emjrk','2CRJNL4PpoLv0za9XR55rp','1348bhSl9VkvDNd29E2xcd','2YoisIEG8eWGxD59Ybj9ju','515Yo0zKHT0mCoYtTYmBEU','2hw5HPkbfAEgoeSzaRHPtq','1qVLeMhWGsAEP4rcinFkYA','6hdTTDoViK1sFfoR6EJkSd','1aBVOAKnsRNYNMuorq0bYc','7iPmJZoGwQWirLRAHNPU9G','3MfHgaNTZ4j0wiia31Jyi2','5Y7HYixqM9F3Pb4Lugi7hI','0L1tpPizhtfVvHX1JOCmRK','5WcYM7zIzepJJ6IiXCEyrH','0RqZjRWl73TV8uJ85rJyFH','5Xc2mVeorzuxsqNHRwQap8','2gIsoVwTNCAdR1jybKcjaL','1UGU2B4q0C71R49zLJBi25','0NBwUNBbm2BL6EgP18tnhc','68oaTJNN7asfT58FbAWfv7','6iGFGuNI2SGflvopEntyic','7CxeSIDC13TcviaB586Q9S','4x3F4W9cnujGXYPDxx5rbm','5GxXKcYQTtROMMoJUPqd2U','7EtQhq8mdJsOTbMLOpzg0x','0OTbfhrAiG6XWN5j0iBeRz','1n2Kc5LM0KSgXyVvnyGlpY','51iKt7Aq9avjKrMIBHjMpR','1yiVlrMdNwruwnbwGVr8nx','5M6OsZuFtLWQTMU5HuFJsP','6ifo3Dg8xCaFZddmbXqsGi','43GOCCCPU5RKIQZXeSuwAk','7hprRKXffCn99YuGROFZB9','3Q0JInFnwRo6ULOEPswH6I','4ayNAnF041AG4CNBwc9BQt','5wkKWcSiTPI9rhOzgRuOSY','3UHR4pFUxfggYuM8vr7fXC','6Gu537fkN5q66LVxZZIcsq','0aiY75KRvidzQ4Uf16ZLCo','2vzxE2P4I7beo3lmMDKmRd','4l5TNZoB9nWoRzYyI4ucnL','2LWHPjEBZgpVuhWDYRF4fa','5sKVr1uTorGGVTTdu4b4gO','2o0NWNAdaQAK3VQYZ6VzlT','6hvooQjicNtlOBQHMjZnAO','0fLqCAXEAYfDi5VcG1lFVb']


const getTrackUrl = () =>{
	return new Promise((res, rej) => {
		spotify.clientCredentialsGrant()
		.then(data => {
			spotify.setAccessToken(data.body['access_token']);

			the_random_track = allTracks[Math.floor(Math.random()*allTracks.length)];
			spotify.getTrack(the_random_track)
			.then(datum => {
				res(datum.body.external_urls.spotify)
			})

		}, "desastre");			
	})
}

getTrackUrl()
.then(data => {
	T.post('statuses/update', {status: "Tick, tock, it's Furry O'Clock...\n" + data},
		(err, data, response) => {
			switch(response){
				case 187:
				console.log('Code 187. Duplicate tweet!')
				break;
				case 200:
				console.log('Successfully posted!');
				break;
				default:
				console.log(data);
			}
		})
})


