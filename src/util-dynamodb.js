"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/prefer-default-export */
const util_1 = require("./util");
function toString(str) {
    return { S: str };
}
exports.toString = toString;
function toStringJson(str) {
    return JSON.stringify(toString(str));
}
exports.toStringJson = toStringJson;
function toNumber(num) {
    return { N: num };
}
exports.toNumber = toNumber;
function toNumberJson(num) {
    return JSON.stringify(toNumber(num));
}
exports.toNumberJson = toNumberJson;
function toBoolean(bool) {
    return { BOOL: bool };
}
exports.toBoolean = toBoolean;
function toBooleanJson(bool) {
    return JSON.stringify(toBoolean(bool));
}
exports.toBooleanJson = toBooleanJson;
function toList(list) {
    return {
        L: list.map((item) => toDynamoDB(item)),
    };
}
exports.toList = toList;
function toListJson(list) {
    return JSON.stringify(toList(list));
}
exports.toListJson = toListJson;
function toMap(map) {
    const obj = JSON.parse(JSON.stringify(map));
    // eslint-disable-next-line array-callback-return
    Object.keys(obj).map((key) => {
        obj[key] = toDynamoDB(obj[key]);
    });
    return { M: obj };
}
exports.toMap = toMap;
function toMapJson(map) {
    return JSON.stringify(toMap(map));
}
exports.toMapJson = toMapJson;
function toDynamoDB(i) {
    if (util_1.isString(i)) {
        return toString(i);
    }
    if (util_1.isNumber(i)) {
        return toNumber(i);
    }
    if (util_1.isBoolean(i)) {
        return toBoolean(i);
    }
    if (util_1.isList(i)) {
        return toList(i);
    }
    return toMap(i);
}
exports.toDynamoDB = toDynamoDB;
function toDynamoDBJson(i) {
    return JSON.stringify(toDynamoDB(i));
}
exports.toDynamoDBJson = toDynamoDBJson;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC1keW5hbW9kYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlsLWR5bmFtb2RiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNERBQTREO0FBQzVELGlEQUFpRDtBQUNqRCxpQ0FBK0Q7QUFFL0QsU0FBZ0IsUUFBUSxDQUFDLEdBQVc7SUFDbEMsT0FBTyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNwQixDQUFDO0FBRkQsNEJBRUM7QUFFRCxTQUFnQixZQUFZLENBQUMsR0FBVztJQUN0QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQUZELG9DQUVDO0FBRUQsU0FBZ0IsUUFBUSxDQUFDLEdBQVc7SUFDbEMsT0FBTyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNwQixDQUFDO0FBRkQsNEJBRUM7QUFFRCxTQUFnQixZQUFZLENBQUMsR0FBVztJQUN0QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQUZELG9DQUVDO0FBRUQsU0FBZ0IsU0FBUyxDQUFDLElBQWE7SUFDckMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUN4QixDQUFDO0FBRkQsOEJBRUM7QUFFRCxTQUFnQixhQUFhLENBQUMsSUFBYTtJQUN6QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUZELHNDQUVDO0FBRUQsU0FBZ0IsTUFBTSxDQUFDLElBQWdCO0lBQ3JDLE9BQU87UUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzdDLENBQUM7QUFDSixDQUFDO0FBSkQsd0JBSUM7QUFFRCxTQUFnQixVQUFVLENBQUMsSUFBZ0I7SUFDekMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLENBQUM7QUFGRCxnQ0FFQztBQUVELFNBQWdCLEtBQUssQ0FBQyxHQUFRO0lBQzVCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVDLGlEQUFpRDtJQUNqRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQzNCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLENBQUM7QUFSRCxzQkFRQztBQUVELFNBQWdCLFNBQVMsQ0FBQyxHQUFRO0lBQ2hDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNwQyxDQUFDO0FBRkQsOEJBRUM7QUFFRCxTQUFnQixVQUFVLENBQUMsQ0FBTTtJQUMvQixJQUFJLGVBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNmLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3BCO0lBRUQsSUFBSSxlQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDZixPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNwQjtJQUVELElBQUksZ0JBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNoQixPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNyQjtJQUVELElBQUksYUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ2IsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbEI7SUFFRCxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQixDQUFDO0FBbEJELGdDQWtCQztBQUVELFNBQWdCLGNBQWMsQ0FBQyxDQUFNO0lBQ25DLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2QyxDQUFDO0FBRkQsd0NBRUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCB7IGlzQm9vbGVhbiwgaXNOdW1iZXIsIGlzTGlzdCwgaXNTdHJpbmcgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9TdHJpbmcoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHsgUzogc3RyIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1N0cmluZ0pzb24oc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRvU3RyaW5nKHN0cikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9OdW1iZXIobnVtOiBudW1iZXIpIHtcbiAgcmV0dXJuIHsgTjogbnVtIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b051bWJlckpzb24obnVtOiBudW1iZXIpIHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRvTnVtYmVyKG51bSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Cb29sZWFuKGJvb2w6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIHsgQk9PTDogYm9vbCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Cb29sZWFuSnNvbihib29sOiBib29sZWFuKSB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeSh0b0Jvb2xlYW4oYm9vbCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9MaXN0KGxpc3Q6IEFycmF5PGFueT4pIHtcbiAgcmV0dXJuIHtcbiAgICBMOiBsaXN0Lm1hcCgoaXRlbTogYW55KSA9PiB0b0R5bmFtb0RCKGl0ZW0pKSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTGlzdEpzb24obGlzdDogQXJyYXk8YW55Pikge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodG9MaXN0KGxpc3QpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTWFwKG1hcDogYW55KSB7XG4gIGNvbnN0IG9iaiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobWFwKSk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgT2JqZWN0LmtleXMob2JqKS5tYXAoKGtleSkgPT4ge1xuICAgIG9ialtrZXldID0gdG9EeW5hbW9EQihvYmpba2V5XSk7XG4gIH0pO1xuXG4gIHJldHVybiB7IE06IG9iaiB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9NYXBKc29uKG1hcDogYW55KSB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeSh0b01hcChtYXApKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRHluYW1vREIoaTogYW55KTogYW55IHtcbiAgaWYgKGlzU3RyaW5nKGkpKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nKGkpO1xuICB9XG5cbiAgaWYgKGlzTnVtYmVyKGkpKSB7XG4gICAgcmV0dXJuIHRvTnVtYmVyKGkpO1xuICB9XG5cbiAgaWYgKGlzQm9vbGVhbihpKSkge1xuICAgIHJldHVybiB0b0Jvb2xlYW4oaSk7XG4gIH1cblxuICBpZiAoaXNMaXN0KGkpKSB7XG4gICAgcmV0dXJuIHRvTGlzdChpKTtcbiAgfVxuXG4gIHJldHVybiB0b01hcChpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRHluYW1vREJKc29uKGk6IGFueSkge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodG9EeW5hbW9EQihpKSk7XG59XG4iXX0=