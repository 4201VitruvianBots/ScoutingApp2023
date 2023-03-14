if [ -d build ]; then
	rm -rf build/*
else
	mkdir build
fi

for i in PitScouting SuperScouting MatchScouting; do
	cd $i
	npm run build-tablet
	cd ..
	cp -r $i/build build/build-$i
done

for i in MatchData AdminInterface; do
	cd $i
	npm run build-tablet
	cd ..
done
