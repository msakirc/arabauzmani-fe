
    <GridList cellHeight={160} cols={12} style={{ margin: 0 }}>
        <GridListTile key="marka" cols={2} rows={1} classes={{ root: classes.tileRoot, tile: classes.tile }}>
            <h3>Seçim</h3>
            <p>ARABA UZMANI</p>
        </GridListTile>
        <GridListTile key="marka" cols={2} rows={1} classes={{ root: classes.tileRoot, tile: classes.tile }}>
            <GridListTileBar
                title="Toyota"
                subtitle="Marka"
                className={classes.titleBar}
                classes={{ title: classes.gridTitle, subtitle: classes.gridSubtitle }}
                actionIcon={
                    <IconButton aria-label="Değiştir" className={classes.icon}>
                        <EditIcon fontSize="large" color={"#ffb74d"} />
                    </IconButton>
                }
                padding="30%"
            />
            <img src={toyota} alt={"marka"} style={{ height: "60%", width: "80%", objectFit: 'scale-down' }} />
        </GridListTile>
        <GridListTile key="model" cols={2} rows={1} classes={{ root: classes.tileRoot, tile: classes.tile }}>
            <img src={corolla} alt={"model"} style={{ height: "90%", width: "90%", objectFit: 'scale-down' }} />
            <GridListTileBar
                title="Corolla"
                subtitle="Model"
                className={classes.titleBar}
                classes={{ title: classes.gridTitle, subtitle: classes.gridSubtitle }}
                actionIcon={
                    <IconButton aria-label="Değiştir" className={classes.icon} >
                        <EditIcon fontSize="large" color="primary" />
                    </IconButton>
                }
                padding="30%"
            />
        </GridListTile>
        <GridListTile key="fields" cols={1} rows={1} classes={{ root: classes.tileRoot, tile: classes.fieldTile }} >
            <h3>Model:</h3>
            <h3>Yıl:</h3>
            <h3>Versiyon:</h3>
        </GridListTile>
        <GridListTile key="versiyon" cols={3} rows={1} classes={{ root: classes.tileRoot, tile: classes.selectionTile }}>
            <GridListTileBar
                className={classes.titleBar}
                classes={{ title: classes.gridTitle, subtitle: classes.gridSubtitle }}
                actionIcon={
                    <IconButton aria-label="Değiştir" className={classes.icon} >
                        <EditIcon fontSize="large" color="primary" />
                    </IconButton>
                }
                padding="30%"
            />
            <h3>Corolla</h3>
            <h3>2014</h3>
            <h3>1.4 Fire Active Sole</h3>
        </GridListTile>
        <GridListTile key="karsilastir" cols={2} rows={1} classes={{ root: classes.tileRoot, tile: classes.tile }} >
            <p>Karşılaştır</p>
        </GridListTile>
    </GridList>