import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ECOM_ORDER', {schema: 'dbo' } )
export class T_ECOM_ORDER {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'ORD_ORDERID_N',
        })
    public ORD_ORDERID_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'ORD_ORDER_DAT',
        })
    public ORD_ORDER_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'ORD_CLIID_C',
        })
    public ORD_CLIID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'ORD_USERID_PREP_C',
        })
    public ORD_USERID_PREP_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'ORD_STARTPREP_DAT',
        })
    public ORD_STARTPREP_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'ORD_ENDPREP_DAT',
        })
    public ORD_ENDPREP_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'ORD_TOTALLINES_N',
        })
    public ORD_TOTALLINES_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'ORD_TOTALLINES_ORDER_N',
        })
    public ORD_TOTALLINES_ORDER_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'ORD_TOTALLINES_PREP_N',
        })
    public ORD_TOTALLINES_PREP_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'ORD_TOTALSALE_D',
        })
    public ORD_TOTALSALE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 3,
        name: 'ORD_TOTALCOST_D',
        })
    public ORD_TOTALCOST_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'ORD_STATUS_C',
        })
    public ORD_STATUS_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'ORD_STATUSDATE_DAT',
        })
    public ORD_STATUSDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'ORD_USERID_VALID_C',
        })
    public ORD_USERID_VALID_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'ORD_PICKING_DAT',
        })
    public ORD_PICKING_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'ORD_SUBSTITION_ALLOWED_C',
        })
    public ORD_SUBSTITION_ALLOWED_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'ORD_TOTALLINES_SUBST_N',
        })
    public ORD_TOTALLINES_SUBST_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'ORD_MAT_READY_C',
        })
    public ORD_MAT_READY_C: string | null;

    @Column('smallint', {
        nullable: true,
        name: 'ORD_SENDPOSNBR_N',
        })
    public ORD_SENDPOSNBR_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'ORD_SESSION_N',
        })
    public ORD_SESSION_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'ORD_CREATIONDATE_DAT',
        })
    public ORD_CREATIONDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'ORD_UPDATEDATE_DAT',
        })
    public ORD_UPDATEDATE_DAT: Date | null;

    @Column('smallint', {
        nullable: true,
        name: 'ORD_LABELS_N',
        })
    public ORD_LABELS_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'ORD_EXPORT_DAT',
        })
    public ORD_EXPORT_DAT: Date | null;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'ORD_ORDERID_CENTRAL_C',
        })
    public ORD_ORDERID_CENTRAL_C: string;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'ORD_LOCKEDUSER_C',
        })
    public ORD_LOCKEDUSER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'ORD_LOCKEDDATE_DAT',
        })
    public ORD_LOCKEDDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'ORD_LOCKEDUTIL_C',
        })
    public ORD_LOCKEDUTIL_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'ORD_PICKINGORIG_DAT',
        })
    public ORD_PICKINGORIG_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 40,
        name: 'ORD_REJETCODE_C',
        })
    public ORD_REJETCODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 500,
        name: 'ORD_COMMENT_C',
        })
    public ORD_COMMENT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'ORD_PREPARATIONID_C',
        })
    public ORD_PREPARATIONID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'ORD_SERVICE_C',
        })
    public ORD_SERVICE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'ORD_CLIORDERCTR_N',
        })
    public ORD_CLIORDERCTR_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'ORD_SITEPREPARATIONID_C',
        })
    public ORD_SITEPREPARATIONID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'ORD_HOMEDELIVERY_C',
        })
    public ORD_HOMEDELIVERY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'ORD_CARRIERCLIID_C',
        })
    public ORD_CARRIERCLIID_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'ORD_SHORTORDERID_N',
        })
    public ORD_SHORTORDERID_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'ORD_VERSION_N',
        })
    public ORD_VERSION_N: number | null;

    @Column('varchar', {
        nullable: true,
        name: 'ORD_TICKET_C',
        })
    public ORD_TICKET_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'ORD_SOURCE_C',
        })
    public ORD_SOURCE_C: string | null;

}
