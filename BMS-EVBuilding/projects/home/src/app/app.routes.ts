import { loadRemoteModule } from '@angular-architects/native-federation';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'room50',
		loadChildren: () => loadRemoteModule('room50', './routes').then((m) => m.routes) },
	{
		path: 'room49',
		loadChildren: () => loadRemoteModule('room49', './routes').then((m) => m.routes) },
	{
		path: 'room48',
		loadChildren: () => loadRemoteModule('room48', './routes').then((m) => m.routes) },
	{
		path: 'room47',
		loadChildren: () => loadRemoteModule('room47', './routes').then((m) => m.routes) },
	{
		path: 'room46',
		loadChildren: () => loadRemoteModule('room46', './routes').then((m) => m.routes) },
	{
		path: 'room45',
		loadChildren: () => loadRemoteModule('room45', './routes').then((m) => m.routes) },
	{
		path: 'room44',
		loadChildren: () => loadRemoteModule('room44', './routes').then((m) => m.routes) },
	{
		path: 'room43',
		loadChildren: () => loadRemoteModule('room43', './routes').then((m) => m.routes) },
	{
		path: 'room42',
		loadChildren: () => loadRemoteModule('room42', './routes').then((m) => m.routes) },
	{
		path: 'room41',
		loadChildren: () => loadRemoteModule('room41', './routes').then((m) => m.routes) },
	{
		path: 'room40',
		loadChildren: () => loadRemoteModule('room40', './routes').then((m) => m.routes) },
	{
		path: 'room39',
		loadChildren: () => loadRemoteModule('room39', './routes').then((m) => m.routes) },
	{
		path: 'room38',
		loadChildren: () => loadRemoteModule('room38', './routes').then((m) => m.routes) },
	{
		path: 'room37',
		loadChildren: () => loadRemoteModule('room37', './routes').then((m) => m.routes) },
	{
		path: 'room36',
		loadChildren: () => loadRemoteModule('room36', './routes').then((m) => m.routes) },
	{
		path: 'room35',
		loadChildren: () => loadRemoteModule('room35', './routes').then((m) => m.routes) },
	{
		path: 'room34',
		loadChildren: () => loadRemoteModule('room34', './routes').then((m) => m.routes) },
	{
		path: 'room33',
		loadChildren: () => loadRemoteModule('room33', './routes').then((m) => m.routes) },
	{
		path: 'room32',
		loadChildren: () => loadRemoteModule('room32', './routes').then((m) => m.routes) },
	{
		path: 'room31',
		loadChildren: () => loadRemoteModule('room31', './routes').then((m) => m.routes) },
	{
		path: 'room30',
		loadChildren: () => loadRemoteModule('room30', './routes').then((m) => m.routes) },
	{
		path: 'room29',
		loadChildren: () => loadRemoteModule('room29', './routes').then((m) => m.routes) },
	{
		path: 'room28',
		loadChildren: () => loadRemoteModule('room28', './routes').then((m) => m.routes) },
	{
		path: 'room27',
		loadChildren: () => loadRemoteModule('room27', './routes').then((m) => m.routes) },
	{
		path: 'room26',
		loadChildren: () => loadRemoteModule('room26', './routes').then((m) => m.routes) },
	{
		path: 'room25',
		loadChildren: () => loadRemoteModule('room25', './routes').then((m) => m.routes) },
	{
		path: 'room24',
		loadChildren: () => loadRemoteModule('room24', './routes').then((m) => m.routes) },
	{
		path: 'room23',
		loadChildren: () => loadRemoteModule('room23', './routes').then((m) => m.routes) },
	{
		path: 'room22',
		loadChildren: () => loadRemoteModule('room22', './routes').then((m) => m.routes) },
	{
		path: 'room21',
		loadChildren: () => loadRemoteModule('room21', './routes').then((m) => m.routes) },
	{
		path: 'room20',
		loadChildren: () => loadRemoteModule('room20', './routes').then((m) => m.routes) },
	{
		path: 'room19',
		loadChildren: () => loadRemoteModule('room19', './routes').then((m) => m.routes) },
	{
		path: 'room18',
		loadChildren: () => loadRemoteModule('room18', './routes').then((m) => m.routes) },
	{
		path: 'room17',
		loadChildren: () => loadRemoteModule('room17', './routes').then((m) => m.routes) },
	{
		path: 'room16',
		loadChildren: () => loadRemoteModule('room16', './routes').then((m) => m.routes) },
	{
		path: 'room15',
		loadChildren: () => loadRemoteModule('room15', './routes').then((m) => m.routes) },
	{
		path: 'room14',
		loadChildren: () => loadRemoteModule('room14', './routes').then((m) => m.routes) },
	{
		path: 'room13',
		loadChildren: () => loadRemoteModule('room13', './routes').then((m) => m.routes) },
	{
		path: 'room12',
		loadChildren: () => loadRemoteModule('room12', './routes').then((m) => m.routes) },
	{
		path: 'room11',
		loadChildren: () => loadRemoteModule('room11', './routes').then((m) => m.routes) },
	{
		path: 'room10',
		loadChildren: () => loadRemoteModule('room10', './routes').then((m) => m.routes) },
	{
		path: 'room9',
		loadChildren: () => loadRemoteModule('room9', './routes').then((m) => m.routes) },
	{
		path: 'room8',
		loadChildren: () => loadRemoteModule('room8', './routes').then((m) => m.routes) },
	{
		path: 'room7',
		loadChildren: () => loadRemoteModule('room7', './routes').then((m) => m.routes) },
	{
		path: 'room6',
		loadChildren: () => loadRemoteModule('room6', './routes').then((m) => m.routes) },
	{
		path: 'room5',
		loadChildren: () => loadRemoteModule('room5', './routes').then((m) => m.routes) },
	{
		path: 'room4',
		loadChildren: () => loadRemoteModule('room4', './routes').then((m) => m.routes) },
	{
		path: 'room3',
		loadChildren: () => loadRemoteModule('room3', './routes').then((m) => m.routes) },
	{
		path: 'room2',
		loadChildren: () => loadRemoteModule('room2', './routes').then((m) => m.routes) },
	{
		path: 'room1',
		loadChildren: () => loadRemoteModule('room1', './routes').then((m) => m.routes) },
	{
		path: '',
		component: HomeComponent,
		pathMatch: 'full'},
	{
		path: '**',
		component: NotFoundComponent}];
