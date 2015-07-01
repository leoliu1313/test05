function summonerGameSearchStart() {
	var names = "";
	names = $("#game-search").val();

	if (names.length < 1) {
		return;
	}
	
	if (names.split("//").length > 1) {
		names = names.split("//")[1];
	}
	
	if (names.split("/").length >= 5) {
		names = names.split("/")[4];
	}	
	
	if (names.split("?").length > 1) {
		names = names.split("?")[0];
	}
	
	$("#game-search").val(names);

	// update
	$( "#form" ).submit();
}

function summonerTeamSearchStart() {
	var names = "";
	names = $("#team-search-names").val();

	if (names.length < 1) {
		return;
	}
		
	var paste = false;

	if (names.split(":").length-1 > 0) {
		paste = true;
	}
	if (names.split("joined the room.").length-1 > 0) {
		paste = true;
	}
	if (names.split("joined the group.").length-1 > 0) {
		paste = true;
	}

	if (paste) {
		splitnames = names.split("\n");
		names = "";
		// :
		for (var i=0; i<splitnames.length; i++) {
			splitname = splitnames[i].split(":");
			if (splitname[0].length > 0 && splitname.length > 1) {
				var duplicate = names.split(",");
				var isdupl = false;
				for (var j = 0; j < duplicate.length; j++) {
					if (duplicate[j] == splitname[0]) {
						isdupl = true;
						break;
					}
				}
				if (!isdupl) {
					names = names + splitname[0] + ",";
				}
			}
		}
		for (var i=0; i<splitnames.length; i++) {
			splitname = splitnames[i].split("joined the room.");
			if (splitname[0].length > 0 && splitname.length == 2) {
				var duplicate = names.split(",");
				var isdupl = false;
				for (var j = 0; j < duplicate.length; j++) {
					if (duplicate[j] == splitname[0]) {
						isdupl = true;
						break;
					}
				}
				if (!isdupl) {
					names = names + splitname[0] + ",";
				}
			}
		}
		for (var i=0; i<splitnames.length; i++) {
			splitname = splitnames[i].split("joined the group.");
			if (splitname[0].length > 0 && splitname.length == 2) {
				var duplicate = names.split(",");
				var isdupl = false;
				for (var j = 0; j < duplicate.length; j++) {
					if (duplicate[j] == splitname[0]) {
						isdupl = true;
						break;
					}
				}
				if (!isdupl) {
					names = names + splitname[0] + ",";
				}
			}
		}
		$("#team-search-names").val(names);
	}

	// update
	$( "#form2" ).submit();
}