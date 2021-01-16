interface LocalTimeStatic {

	readonly class:any;
	from( arg0:any /*java.time.temporal.TemporalAccessor*/ ):java.time.LocalTime;
	now(  ):java.time.LocalTime;
	now( arg0:any /*java.time.Clock*/ ):java.time.LocalTime;
	now( arg0:any /*java.time.ZoneId*/ ):java.time.LocalTime;
	of( arg0:int, arg1:int, arg2:int ):java.time.LocalTime;
	of( arg0:int, arg1:int ):java.time.LocalTime;
	of( arg0:int, arg1:int, arg2:int, arg3:int ):java.time.LocalTime;
	ofInstant( arg0:any /*java.time.Instant*/, arg1:any /*java.time.ZoneId*/ ):java.time.LocalTime;
	ofNanoOfDay( arg0:long ):java.time.LocalTime;
	ofSecondOfDay( arg0:long ):java.time.LocalTime;
	parse( arg0: string, arg1:any /*java.time.format.DateTimeFormatter*/ ):java.time.LocalTime;
	parse( arg0:string ):java.time.LocalTime;
}

export const LocalTime: LocalTimeStatic = Java.type("java.time.LocalTime");