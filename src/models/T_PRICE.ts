import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PRICE', {schema: 'dbo' } )
@Index('IX_PRICE_PROMO', ['PR_PRICETYPE_C', 'PR_PRICESTARTDATE_DAT'])
export class T_PRICE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'PR_IDNUMBER_C',
        })
    public PR_IDNUMBER_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'PR_PRICETYPE_C',
        })
    public PR_PRICETYPE_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'PR_LOCALINPUT_C',
        })
    public PR_LOCALINPUT_C: string;

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'PR_PRICESTARTDATE_DAT',
        })
    public PR_PRICESTARTDATE_DAT: Date;

    @Column('datetime', {
        nullable: true,
        name: 'PR_PRICEENDDATE_DAT',
        })
    public PR_PRICEENDDATE_DAT: Date | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PR_SALESPRICE_D',
        })
    public PR_SALESPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'PR_COSTPRICE_D',
        })
    public PR_COSTPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PR_PROFITPERCENT_D',
        })
    public PR_PROFITPERCENT_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'PR_PROFITCODE_C',
        })
    public PR_PROFITCODE_C: string | null;

    @Column('int', {
        nullable: false,
        name: 'PR_DEPARTMENT_N',
        })
    public PR_DEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        length: 7,
        name: 'PR_GIBREF_C',
        })
    public PR_GIBREF_C: string;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'PR_PROMOTIONID_C',
        })
    public PR_PROMOTIONID_C: string | null;

    @Column('timestamp', {
        nullable: true,
        name: 'PR_LASTUPDATE_TS',
        })
    public PR_LASTUPDATE_TS: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'PR_PRICECURRENCY_C',
        })
    public PR_PRICECURRENCY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 40,
        name: 'PR_REASON_C',
        })
    public PR_REASON_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'PR_USERID_C',
        })
    public PR_USERID_C: string | null;

}
