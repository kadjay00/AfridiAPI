import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_LABEL_REQUEST', {schema: 'dbo' } )
@Index('IX_LABEL_REQUEST_SPOTTER', ['LRQ_SPOTTER_N'])
export class T_LABEL_REQUEST {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'LRQ_IDENTITY_D',
        })
    public LRQ_IDENTITY_D: number;

    @Column('datetime', {
        nullable: true,
        name: 'LRQ_REPRISE_DAT',
        })
    public LRQ_REPRISE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'LRQ_IDNUMBER_C',
        })
    public LRQ_IDNUMBER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'LRQ_LABELTYPE_C',
        })
    public LRQ_LABELTYPE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LRQ_LABELSIGN_C',
        })
    public LRQ_LABELSIGN_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'LRQ_LABELNBR_N',
        })
    public LRQ_LABELNBR_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'LRQ_STATUS_C',
        })
    public LRQ_STATUS_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'LRQ_BARCODE_C',
        })
    public LRQ_BARCODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LRQ_REASONCODE_C',
        })
    public LRQ_REASONCODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LRQ_DELIVERYCODE_C',
        })
    public LRQ_DELIVERYCODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LRQ_CABCODEDESCRIP_C',
        })
    public LRQ_CABCODEDESCRIP_C: string | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'LRQ_SPOTTER_N',
        })
    public LRQ_SPOTTER_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'LRQ_STATUSDATE_DAT',
        })
    public LRQ_STATUSDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'LRQ_USERID_C',
        })
    public LRQ_USERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'LRQ_SORTCLASSIF_C',
        })
    public LRQ_SORTCLASSIF_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'LRQ_SORTPLANO_C',
        })
    public LRQ_SORTPLANO_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 13,
        scale: 0,
        name: 'LRQ_EANCODE_N',
        })
    public LRQ_EANCODE_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LRQ_SORTSEQUENCE_C',
        })
    public LRQ_SORTSEQUENCE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'LRQ_SORTCUSTOM_C',
        })
    public LRQ_SORTCUSTOM_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'LRQ_PRINTCODE_C',
        })
    public LRQ_PRINTCODE_C: string | null;

}
