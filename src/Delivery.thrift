/**
 * 배송 상태
 */
enum DeliveryStatus {
    /** 주문 접수됨 */
	SUBMITTED,
	/** 배송기사가 배정됨 */
	DRIVER_ASSIGNED,
	/** 물품을 픽업함 */
	PICKED_UP,
	/** 물품을 전달함 */
	DELIVERED,
	/** 배송 취소됨 */
	CANCELED
}

/**
 * 배송기사
 */
struct Driver {
    /** 아이디 */
	1: optional i32 id,
	/** 이름 */
	2: optional string name,
	/** 전화번호 */
	3: optional string phone,
	/** 배송기사 위치 */
	4: optional Location location,
}

/**
 * 위치 정보
 */
struct Location {
	/** 위도 */
	1: optional double lat,
	/** 경도 */
	2: optional double lng
}

/**
 * 배송 주문
 */
struct Delivery {
    /** 주문 번호 */
	1: optional string deliveryId,
	/** 주문 상태 */
	2: optional DeliveryStatus status,
	/** 주문 수행 배송기사 */
	3: optional Driver driver,
	/** 출발지 */
	4: optional Location origin,
	/** 도착지 */
	5: optional Location dest
}

/**
 * 오류 코드
 */
enum ErrorCode {
    /** No information available about the error */
    UNKNOWN = 1,

    /** Username and/or password incorrect */
    INVALID_AUTH = 2,
}
exception Exception {
	/** The numeric code indicating the type of error that occurred. */
	1: optional ErrorCode code,

    /** If the error applied to a particular input parameter, this will indicate which parameter. */
	2: optional string parameter
}

service DeliveryService {
	void submit(1: Delivery delivery)
	  throws (1: Exception exception),

	void assignDriver(1: string deliveryId,
		              2: i32 driverId)
	  throws (1: Exception exception),

	void pickup(1: string deliveryId)
	  throws (1: Exception exception),

	void complete(1: string deliveryId)
	  throws (1: Exception exception),

	void cancel(1: string deliveryId)
	  throws (1: Exception exception),
}