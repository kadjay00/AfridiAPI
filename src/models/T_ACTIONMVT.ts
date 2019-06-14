import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ACTIONMVT', {schema: 'dbo' } )
export class T_ACTIONMVT {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'ACM_LINE_N',
        })
    public ACM_LINE_N: number;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'ACM_ITEMLINE_N',
        })
    public ACM_ITEMLINE_N: number | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'ACM_ACTIONID_N',
        })
    public ACM_ACTIONID_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'ACM_IDNUMBER_C',
        })
    public ACM_IDNUMBER_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 13,
        scale: 0,
        name: 'ACM_EANCODE_N',
        })
    public ACM_EANCODE_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'ACM_STATE_C',
        })
    public ACM_STATE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'ACM_DATE_DAT',
        })
    public ACM_DATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'ACM_USER_C',
        })
    public ACM_USER_C: string | null;

}
