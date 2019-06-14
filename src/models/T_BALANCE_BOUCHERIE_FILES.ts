import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_BALANCE_BOUCHERIE_FILES', {schema: 'dbo' } )
export class T_BALANCE_BOUCHERIE_FILES {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // precision:9,
        // scale:0,
        name: 'BBF_ID_N',
        })
    public BBF_ID_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'BBF_RUN_DAT',
        })
    public BBF_RUN_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'BBF_BRAND_C',
        })
    public BBF_BRAND_C: string | null;

    @Column('varchar', {
        nullable: true,
        name: 'BBF_FILE_C',
        })
    public BBF_FILE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'BBF_CREATED_DAT',
        })
    public BBF_CREATED_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'BBF_MODIFIED_DAT',
        })
    public BBF_MODIFIED_DAT: Date | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'BBF_SIZEKB_D',
        })
    public BBF_SIZEKB_D: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'BBF_HEADERS_N',
        })
    public BBF_HEADERS_N: number | null;

}
